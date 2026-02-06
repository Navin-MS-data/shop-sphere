import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisUrl = process.env.UPSTASH_REDIS_URL;

// Create Redis client with error handling
const createRedisClient = () => {
  if (!redisUrl) {
    console.warn("⚠️ UPSTASH_REDIS_URL is not defined. Redis caching will be disabled.");
    return null;
  }

  const client = new Redis(redisUrl, {
    maxRetriesPerRequest: 3,
    retryDelayOnFailover: 100,
    retryStrategy: (times) => {
      if (times > 3) {
        console.error("❌ Redis connection failed after 3 retries. Giving up.");
        return null; // Stop retrying
      }
      const delay = Math.min(times * 200, 2000);
      console.log(`🔄 Redis reconnecting in ${delay}ms... (attempt ${times})`);
      return delay;
    },
    lazyConnect: false,
    enableOfflineQueue: false,
  });

  client.on("connect", () => {
    console.log("✅ Redis connected successfully");
  });

  client.on("error", (error) => {
    console.error("❌ Redis connection error:", error.message);
  });

  client.on("close", () => {
    console.log("🔌 Redis connection closed");
  });

  return client;
};

const redisClient = createRedisClient();

// Redis wrapper with fallback for when Redis is unavailable
export const redis = {
  get: async (key) => {
    if (!redisClient) return null;
    try {
      return await redisClient.get(key);
    } catch (error) {
      console.error("Redis GET error:", error.message);
      return null;
    }
  },

  set: async (key, value, ...args) => {
    if (!redisClient) return null;
    try {
      return await redisClient.set(key, value, ...args);
    } catch (error) {
      console.error("Redis SET error:", error.message);
      return null;
    }
  },

  del: async (key) => {
    if (!redisClient) return null;
    try {
      return await redisClient.del(key);
    } catch (error) {
      console.error("Redis DEL error:", error.message);
      return null;
    }
  },

  // Expose the raw client for advanced operations if needed
  client: redisClient,
};
