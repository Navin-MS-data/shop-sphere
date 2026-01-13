<div align="center">

# 🛍️ Shop Sphere

### A Modern, Full-Stack E-Commerce Platform

![Shop Sphere](frontend/public/screenshot-for-readme.png)

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/Redis-Caching-DC382D?logo=redis&logoColor=white)](https://redis.io/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-008CDD?logo=stripe&logoColor=white)](https://stripe.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [API Documentation](#-api-documentation)

</div>

---

## 📖 About

**Shop Sphere** is a production-ready, full-stack e-commerce application built with the MERN stack. It features a modern glassmorphism UI, robust authentication, secure payment processing with Stripe, admin analytics dashboard, and Redis caching for optimal performance.

---

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based Authentication** with access & refresh tokens
- **Secure Password Hashing** using bcrypt
- **Protected Routes** for user and admin access
- **Session Management** with automatic token refresh
- **HTTP-only Cookies** for enhanced security

### 🛒 E-Commerce Functionality
- **Product Browsing** with category filtering
- **Product Details Page** with quantity controls
- **Shopping Cart** with real-time updates
- **Checkout Process** with Stripe integration
- **Coupon System** for promotional discounts
- **Order History** and tracking

### 👑 Admin Dashboard
- **Analytics Overview** with sales metrics
- **Product Management** (Create, Read, Update, Delete)
- **Category Management** for product organization
- **Sales Charts** with visual data representation
- **User Management** capabilities

### 🎨 User Interface
- **Modern Glassmorphism Design** with transparent blur effects
- **Responsive Layout** for all device sizes
- **Smooth Animations** and transitions
- **Toast Notifications** for user feedback
- **Monochrome Theme** (White/Black/Grey palette)
- **Custom Logo & Branding**

### ⚡ Performance & Optimization
- **Redis Caching** for faster data retrieval
- **Image Upload** via Cloudinary CDN
- **Optimized API Calls** with proper error handling
- **Database Indexing** for query optimization

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Zustand** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Redis** (Upstash) - Caching layer
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing
- **Stripe** - Payment processing
- **Cloudinary** - Image hosting and management
- **dotenv** - Environment variable management

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Redis** (Upstash account recommended)
- **Stripe** account for payments
- **Cloudinary** account for image uploads

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/shop-sphere.git
cd shop-sphere
```

### 2. Install Dependencies

#### Backend Dependencies
```bash
npm install
```

#### Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

### 3. Environment Variables

Create a `.env` file in the **root directory** with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Database
MONGO_URI=your_mongodb_connection_string

# Redis Cache (Upstash)
UPSTASH_REDIS_URL=your_upstash_redis_url

# JWT Secrets (generate strong random strings)
ACCESS_TOKEN_SECRET=your_access_token_secret_here
REFRESH_TOKEN_SECRET=your_refresh_token_secret_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe Payment
STRIPE_SECRET_KEY=your_stripe_secret_key
```

#### 🔑 Getting API Keys

**MongoDB:**
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string from the cluster dashboard

**Redis (Upstash):**
1. Sign up at [Upstash](https://upstash.com/)
2. Create a Redis database
3. Copy the REST URL

**Cloudinary:**
1. Create account at [Cloudinary](https://cloudinary.com/)
2. Find credentials in your dashboard

**Stripe:**
1. Sign up at [Stripe](https://stripe.com/)
2. Get your secret key from the developers section (use test key for development)

**JWT Secrets:**
Generate secure random strings:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## 🚀 Usage

### Development Mode

Run both frontend and backend in development mode:

#### Option 1: Concurrent (Recommended)
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend server on `http://localhost:5173`

#### Option 2: Separate Terminals

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Production Build

#### Build the Application
```bash
npm run build
```

#### Start Production Server
```bash
npm run start
```

The app will be available at `http://localhost:5000`

---

## 📂 Project Structure

```
shop-sphere/
├── backend/
│   ├── controllers/       # Request handlers
│   ├── lib/              # Utility functions (Redis, Cloudinary, Stripe)
│   ├── middleware/       # Auth middleware
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   └── server.js         # Entry point
├── frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── stores/       # Zustand stores
│   │   ├── lib/          # Utility functions
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   └── package.json
├── .env                  # Environment variables (create this)
├── package.json          # Root package.json
└── README.md
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/signup` | Register new user | No |
| POST | `/auth/login` | Login user | No |
| POST | `/auth/logout` | Logout user | Yes |
| POST | `/auth/refresh-token` | Refresh access token | Yes |
| GET | `/auth/profile` | Get user profile | Yes |

### Product Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/products` | Get all products | No |
| GET | `/products/featured` | Get featured products | No |
| GET | `/products/category/:category` | Get products by category | No |
| GET | `/products/recommendations` | Get recommended products | Yes |
| GET | `/products/:id` | Get single product | No |
| POST | `/products` | Create product (Admin) | Yes (Admin) |
| PATCH | `/products/:id` | Update product (Admin) | Yes (Admin) |
| DELETE | `/products/:id` | Delete product (Admin) | Yes (Admin) |

### Cart Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/cart` | Get user cart | Yes |
| POST | `/cart` | Add to cart | Yes |
| DELETE | `/cart` | Remove from cart | Yes |
| PUT | `/cart/:id` | Update cart quantity | Yes |

### Coupon Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/coupons` | Get active coupon | Yes |
| POST | `/coupons/validate` | Validate coupon code | Yes |

### Payment Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/payments/create-checkout-session` | Create Stripe session | Yes |
| POST | `/payments/checkout-success` | Handle successful payment | Yes |

### Analytics Endpoints (Admin Only)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/analytics` | Get sales analytics | Yes (Admin) |

---

## 👤 Default Admin Account

For testing purposes, you can create an admin account by:

1. Sign up a regular account
2. Manually update the user role in MongoDB:
```javascript
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
```

Or create an admin seed script in your backend.

---

## 🎨 Features in Detail

### Glassmorphism UI
- Transparent navbar with Gaussian blur backdrop
- Modern card designs with subtle shadows
- Smooth hover effects and transitions

### Smart Cart System
- Prevents duplicate toast notifications
- Real-time cart updates
- Persistent cart data

### Admin Analytics
- Revenue tracking
- User growth metrics
- Sales visualizations with charts
- Product performance insights

### Secure Payments
- Stripe integration for secure transactions
- Webhook support for payment confirmation
- Automatic order creation

---

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
- Verify your `MONGO_URI` is correct
- Whitelist your IP in MongoDB Atlas
- Check if MongoDB service is running (if local)

**Redis Connection Error:**
- Verify `UPSTASH_REDIS_URL` format
- Check Upstash dashboard for service status

**Stripe Payment Issues:**
- Ensure you're using test keys in development
- Verify webhook endpoints are correctly configured
- Check Stripe dashboard for error logs

**Frontend Not Loading:**
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check if both servers are running
- Verify `CLIENT_URL` in `.env` matches frontend URL

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Built with ❤️ using the MERN Stack**

</div>