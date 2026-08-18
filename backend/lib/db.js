import mongoose from "mongoose";

let connectionPromise = null;

export const connectDB = () => {
	if (mongoose.connection.readyState === 1) return Promise.resolve();
	if (!connectionPromise) {
		connectionPromise = mongoose
			.connect(process.env.MONGO_URI)
			.then((conn) => {
				console.log(`MongoDB connected: ${conn.connection.host}`);
			})
			.catch((error) => {
				connectionPromise = null;
				throw error;
			});
	}
	return connectionPromise;
};
