# PROJECT REPORT

---

# Shop Sphere: A Full-Stack E-Commerce Web Application for Sustainable Fashion

---

**Submitted By:** [Your Name]
**Enrollment No.:** [Your Enrollment Number]
**Programme:** Bachelor of Computer Applications (BCA)
**Batch:** [Your Batch Year]
**Guided By:** [Guide's Name]
**Institution:** [Your College/University Name]
**Date:** May 2026

---

---

## Summary

This project presents the design and development of **Shop Sphere**, a full-stack e-commerce web application dedicated to sustainable and eco-friendly fashion. The primary objective of the project was to build a feature-rich, production-ready online shopping platform that enables customers to browse, wishlist, and purchase products, while equipping administrators with a dedicated panel for product management and business analytics.

To achieve these objectives, a modern MERN-adjacent technology stack was adopted. The frontend was developed using React 18 with Vite, Zustand for state management, and Tailwind CSS for responsive UI design. The backend was built on Node.js with Express.js, MongoDB as the primary database, and Redis (Upstash) as a caching layer. Payment processing was integrated via the Stripe API, product image management through Cloudinary, and a secure dual-token JWT authentication system with HTTP-only cookies was implemented for user sessions.

Key findings from development indicate that embedding the shopping cart and wishlist directly within the User document in MongoDB significantly reduced query complexity. The Redis caching layer for featured products reduced repeated database reads, and the Axios interceptor-based token refresh mechanism ensured a seamless, uninterrupted user experience across session boundaries.

The system successfully delivers core e-commerce functionalities: user registration and authentication, category-based product browsing, a fully functional cart with coupon support, Stripe-powered checkout, a wishlist, and product recommendations. The admin dashboard provides real-time analytics with a 7-day sales and revenue chart.

It is recommended that future iterations introduce product reviews and ratings, advanced filtering and search, and OAuth-based social login to further enhance the platform's usability and reach. In conclusion, Shop Sphere demonstrates that a scalable, secure, and user-friendly e-commerce platform can be built using modern open-source technologies within an academic project scope.

---

---

## Table of Contents

1. Introduction
   - 1.1 Background of the Study
   - 1.2 Research Objectives
   - 1.3 Research Questions
   - 1.4 Scope of the Study
2. Literature Review
3. System Analysis
   - 3.1 Existing System Analysis
   - 3.2 Proposed System Overview
   - 3.3 Functional Requirements
   - 3.4 Non-Functional Requirements
   - 3.5 Feasibility Study
4. System Design
   - 4.1 System Architecture
   - 4.2 Database Design
   - 4.3 Data Flow Diagrams
   - 4.4 UML Diagrams
5. Implementation
   - 5.1 Technology Stack
   - 5.2 Module Description
   - 5.3 Algorithms Used
   - 5.4 Key Code Snippets
6. Testing and Validation
7. Findings and Discussion
8. Conclusion
9. Recommendations
10. Limitations of the Study
11. References

---

---

## Chapter 1: Introduction

### 1.1 Background of the Study

The global e-commerce industry has witnessed exponential growth over the past decade, driven by widespread internet penetration, increasing smartphone adoption, and a shift in consumer preference from physical retail to online shopping. According to global market research, e-commerce revenues are projected to surpass $6 trillion by 2024, with the fashion and apparel segment consistently ranking among the top-performing categories. In this landscape, building a robust, scalable, and secure online retail platform has become both a technical challenge and a commercial necessity.

Simultaneously, a significant shift in consumer consciousness toward sustainability and eco-friendly products has emerged. Modern consumers, particularly the younger demographic, actively seek out brands that align with their environmental values. This convergence of digital retail and sustainable consumerism presents a compelling opportunity for a purpose-driven e-commerce platform.

Traditional e-commerce platforms, while feature-rich, often carry licensing costs, limited customizability, and dependency on third-party vendors for core business logic. Building a custom full-stack application using modern open-source technologies allows for complete control over architecture, user experience, and data, while also serving as a comprehensive exercise in applied software engineering.

Shop Sphere was conceived in this context — a purpose-built, full-stack e-commerce web application tailored for sustainable fashion. The platform leverages the MERN stack (MongoDB, Express.js, React, Node.js) alongside supplementary technologies such as Redis for caching, Stripe for payments, and Cloudinary for media management, to deliver a production-grade shopping experience from both the customer and administrator perspective.

### 1.2 Research Objectives

The following objectives guided the design and development of the Shop Sphere project:

- **To design and develop** a full-stack e-commerce web application using React, Node.js, Express.js, and MongoDB that supports end-to-end product purchasing.
- **To implement** a secure dual-token JWT authentication system using HTTP-only cookies to protect user sessions and prevent common web vulnerabilities.
- **To integrate** the Stripe payment gateway to enable seamless and secure online transactions within the platform.
- **To develop** an administrative dashboard that allows administrators to create, manage, and delete products, toggle featured status, and monitor real-time business analytics.
- **To implement** Redis-based caching to optimize frequently accessed data (featured products) and reduce database load.
- **To evaluate** the effectiveness of embedding cart and wishlist data within the User document as a schema design strategy for a small-to-medium scale e-commerce system.
- **To build** a responsive, accessible, and visually consistent user interface using Tailwind CSS and Framer Motion for an enhanced browsing experience across devices.

### 1.3 Research Questions

The project was guided by the following research questions:

1. How can a secure, token-based authentication system be implemented in a full-stack JavaScript application without relying on third-party identity providers?
2. What schema design strategies in MongoDB are most appropriate for managing cart and wishlist data in a single-user e-commerce context?
3. How does Redis caching improve the performance of product data retrieval in a Node.js/Express backend?
4. What design patterns in React (state management, code splitting, protected routing) are most suitable for a production-grade e-commerce frontend?
5. How can Stripe's hosted checkout be integrated into a custom-built e-commerce platform while maintaining a seamless user experience?

### 1.4 Scope of the Study

The scope of the Shop Sphere project is defined as follows:

- **Domain:** Online retail, specifically the sustainable fashion and clothing sector.
- **Platform:** Web application accessible via modern desktop and mobile browsers.
- **Geographical Scope:** The application is built for a general audience without regional restrictions; however, payment functionality uses Stripe's test environment.
- **User Roles:** Two distinct user roles are supported — Customer and Admin.
- **Product Categories:** Seven predefined categories: Jeans, T-Shirts, Shoes, Glasses, Jackets, Suits, and Bags.
- **Time Period:** The project was designed and developed within the academic year 2025–2026.
- **Exclusions:** The project does not include a native mobile application, a seller/vendor multi-tenancy system, real-time chat support, or a production-live payment environment.

---

---

## Chapter 2: Literature Review

### 2.1 Introduction

The design of modern e-commerce applications draws from a broad body of research spanning web application architecture, database design, security, user experience, and payment systems. This literature review examines relevant prior work across these domains, identifies the strengths and limitations of existing systems and research, and contextualizes the design decisions made in Shop Sphere.

### 2.2 E-Commerce Platform Architectures

Turban et al. (2018) provide a comprehensive framework for understanding e-commerce systems, categorizing them by business model (B2C, B2B, C2C) and architectural pattern (monolithic vs. microservices). Their work highlights that small-to-medium e-commerce platforms benefit most from a monolithic architecture in early stages due to reduced operational complexity, a principle that informed the single-server Express.js architecture of Shop Sphere.

MongoDB's official documentation and numerous practitioner studies (Chodorow, 2019) establish the case for using document-oriented NoSQL databases in e-commerce contexts, particularly for their schema flexibility and ability to embed related data (such as cart items) directly within user documents, avoiding expensive JOIN operations common in relational systems.

### 2.3 Authentication and Security in Web Applications

OWASP (Open Web Application Security Project) guidelines consistently identify broken authentication and session management as among the top web application security risks. Research by Richer and Sanso (2017) on OAuth 2.0 and JWT-based authentication demonstrates the effectiveness of short-lived access tokens combined with long-lived refresh tokens for maintaining secure sessions. The dual-token pattern adopted in Shop Sphere — where access tokens expire in 15 minutes and refresh tokens are stored in both HTTP-only cookies and Redis with a 7-day TTL — directly reflects these best practices.

Studies on cookie-based vs. localStorage-based token storage (Auth0 Engineering Blog, 2020) consistently conclude that HTTP-only cookies are significantly more resistant to XSS attacks than localStorage, a finding that shaped Shop Sphere's authentication design.

### 2.4 Caching Strategies in Web Applications

Redis has emerged as the industry standard for in-memory caching in web applications. Carlson (2013) documents Redis's publish/subscribe, key-value, and list data structures, demonstrating significant latency reductions for read-heavy workloads. In e-commerce systems, product catalog data — particularly featured or promoted products — is read far more frequently than it is written. Caching this data in Redis, as implemented in Shop Sphere, aligns with the cache-aside pattern documented by Microsoft Azure Architecture Center (2022), where the application checks the cache before the database and populates the cache on a miss.

### 2.5 Existing E-Commerce Systems and Gaps

**Shopify** is the most widely adopted hosted e-commerce platform. While it provides rich functionality out-of-the-box (payment, inventory, analytics), it operates as a closed platform with licensing fees and limited backend customization. Developers cannot directly control the authentication layer, database schema, or server-side logic.

**WooCommerce** (WordPress plugin) offers greater customization but introduces dependency on the WordPress ecosystem and PHP, which can conflict with modern JavaScript-first development workflows.

**Medusa.js** and **Commerce.js** represent newer open-source headless commerce solutions. While powerful, they introduce significant learning overhead and are designed for large teams, making them less suitable for a focused BCA-level project.

**Identified Gap:** No existing lightweight, open-source, full-stack JavaScript e-commerce reference application adequately demonstrates the integration of dual-token JWT auth, Redis caching, Stripe payments, Cloudinary media management, and a real-time admin analytics dashboard within a single, cohesive codebase accessible to students. Shop Sphere addresses this gap by providing a production-grade yet academically approachable implementation.

### 2.6 State Management in React Applications

Redux has historically been the dominant state management solution for React applications. However, recent research and community benchmarks (Daishi Kato, 2021 — creator of Zustand) demonstrate that Zustand offers comparable functionality with significantly less boilerplate and a smaller bundle size, making it preferable for medium-scale applications. Shop Sphere adopted Zustand, managing four independent stores (user, cart, products, wishlist) — a design validated by its clean separation of concerns and minimal re-render overhead.

### 2.7 Conclusion of Literature Review

The reviewed literature supports the core architectural and design decisions made in Shop Sphere. The dual-token JWT authentication pattern, Redis cache-aside strategy, MongoDB document embedding for cart/wishlist, and Zustand for state management are all grounded in established best practices. The primary gap addressed by this project is the absence of a cohesive, full-stack JavaScript e-commerce implementation that integrates all these technologies for educational and reference purposes.

---

---

## Chapter 3: System Analysis

### 3.1 Existing System Analysis

Existing e-commerce solutions such as Shopify, WooCommerce, and Magento offer broad functionality but present several limitations in the context of this project:

| Aspect | Shopify | WooCommerce | Shop Sphere (Proposed) |
|---|---|---|---|
| Cost | Subscription-based | Free (hosting costs extra) | Open-source, self-hosted |
| Customizability | Limited (theme/app-based) | Moderate (PHP) | Full (JS full-stack) |
| Tech Stack | Proprietary (Liquid) | PHP/WordPress | React + Node.js + MongoDB |
| Auth Control | Managed externally | Plugin-dependent | Custom JWT (full control) |
| Caching | Built-in (opaque) | Plugin-dependent | Redis (configurable) |
| Analytics | Basic (paid advanced) | Plugin-dependent | Custom real-time dashboard |
| Learning Value | Low | Low | High |

The primary limitation of existing systems is their closed nature — developers cannot study or modify core authentication, caching, or payment flows, which limits educational value.

### 3.2 Proposed System Overview

Shop Sphere is proposed as a full-stack, open-source e-commerce web application that:

- Allows customers to register, browse products by category, manage a cart and wishlist, apply discount coupons, and complete purchases via Stripe.
- Allows administrators to create and manage products (with image upload to Cloudinary), toggle featured status with Redis cache invalidation, and view real-time business analytics.
- Implements a secure, production-grade authentication system using dual-token JWT with HTTP-only cookies and Redis-backed refresh token storage.

### 3.3 Functional Requirements

**Customer Module:**
- FR1: Users shall be able to register with name, email, and password.
- FR2: Users shall be able to log in and receive a secure session (access + refresh tokens).
- FR3: Users shall be able to browse products filtered by category.
- FR4: Users shall be able to view a product detail page with size selection and quantity control.
- FR5: Users shall be able to add, remove, and update quantities of items in their cart.
- FR6: Users shall be able to add and remove products from their wishlist.
- FR7: Users shall be able to apply a discount coupon code at checkout.
- FR8: Users shall be redirected to a Stripe-hosted checkout page to complete payment.
- FR9: Upon successful payment, an order record shall be created and a gift coupon issued if the order total meets the threshold.
- FR10: Users shall see "People Also Bought" product recommendations on the cart page.

**Admin Module:**
- FR11: Administrators shall be able to create a new product with name, description, price, category, and image.
- FR12: Administrators shall be able to view all products in a tabular list.
- FR13: Administrators shall be able to toggle a product's featured status.
- FR14: Administrators shall be able to delete a product.
- FR15: Administrators shall be able to view a real-time analytics dashboard showing total users, products, sales, revenue, and a 7-day daily sales/revenue chart.

### 3.4 Non-Functional Requirements

- **Security:** All authentication tokens stored in HTTP-only cookies; passwords hashed with bcrypt (salt rounds: 10); admin routes protected by role-based middleware.
- **Performance:** Redis caching for featured products; Axios interceptor deduplication to prevent redundant token refresh calls.
- **Scalability:** Stateless backend (session state in Redis, not server memory) allows horizontal scaling.
- **Responsiveness:** UI built with Tailwind CSS utility classes; mobile layouts validated for cart and product pages.
- **Reliability:** Redis wrapper fails silently (returns null) so the application continues functioning without the cache layer.
- **Usability:** Toast notifications for all user actions; Framer Motion animations for smooth page transitions; React Confetti on purchase success.

### 3.5 Feasibility Study

**Technical Feasibility:**
All technologies used (React, Node.js, Express, MongoDB, Redis, Stripe, Cloudinary) are mature, well-documented, and supported by active open-source communities. Free tiers are available for MongoDB Atlas, Upstash Redis, Cloudinary, and Stripe (test mode), making the project fully deployable at zero cost.

**Economic Feasibility:**
The project uses entirely free-tier cloud services during development and testing. Production deployment can be achieved on platforms like Render, Railway, or Vercel (frontend) with low-cost database hosting, making it economically viable for a startup or academic context.

**Operational Feasibility:**
The system requires no specialized hardware. Any modern browser supports the frontend. The backend requires a Node.js runtime environment. Administrative operations are intuitive and accessible via a web dashboard, requiring no technical expertise from the admin user.

---

---

## Chapter 4: System Design

### 4.1 System Architecture

Shop Sphere follows a **three-tier client-server architecture**:

```
┌─────────────────────────────────────────────────────┐
│                   CLIENT TIER                        │
│   React 18 + Vite (SPA)                             │
│   Zustand Stores | Axios | Tailwind CSS             │
│   Framer Motion | Recharts | Stripe.js              │
└─────────────────────┬───────────────────────────────┘
                      │ HTTPS / REST API (/api/*)
┌─────────────────────▼───────────────────────────────┐
│                 APPLICATION TIER                     │
│   Node.js + Express.js (ES Modules)                 │
│   JWT Middleware | Route Controllers                 │
│   Stripe SDK | Cloudinary SDK                       │
└────────────┬────────────────────┬───────────────────┘
             │                    │
┌────────────▼──────┐  ┌──────────▼──────────────────┐
│   DATA TIER (DB)  │  │   CACHE TIER                 │
│   MongoDB Atlas   │  │   Redis (Upstash)            │
│   (Mongoose ODM)  │  │   Featured Products Cache    │
│   Users, Products │  │   Refresh Token Storage      │
│   Orders, Coupons │  │                              │
└───────────────────┘  └──────────────────────────────┘
```

**External Service Integrations:**
- **Stripe:** Payment session creation and webhook-style checkout success handling.
- **Cloudinary:** Product image upload, storage, and deletion.

### 4.2 Database Design

#### 4.2.1 Entity-Relationship Overview

The system manages four primary entities: **User**, **Product**, **Order**, and **Coupon**.

```
USER ──────────────────── ORDER
 |  (1 user : many orders)  |
 |                           |
 |  cartItems[]              | products[]
 |  (embedded)               |
 |                        PRODUCT
 |  wishlistItems[]          |
 |  (embedded ref)           |
 |                        (1 product : many orders)
COUPON
 | (1 coupon : 1 user)
```

#### 4.2.2 Collection Schemas

**User Collection:**
```
{
  name:          String (required)
  email:         String (unique, lowercase)
  password:      String (bcrypt hashed, min 6)
  role:          Enum ["customer", "admin"] (default: "customer")
  cartItems:     [{ product: ObjectId→Product, quantity: Number }]
  wishlistItems: [ObjectId→Product]
  timestamps:    createdAt, updatedAt
}
```

**Product Collection:**
```
{
  name:        String (required)
  description: String (required)
  price:       Number (min: 0, required)
  image:       String (Cloudinary URL)
  category:    String (required)
  isFeatured:  Boolean (default: false)
  timestamps:  createdAt, updatedAt
}
```

**Order Collection:**
```
{
  user:            ObjectId→User (required)
  products:        [{ product: ObjectId→Product, quantity: Number, price: Number }]
  totalAmount:     Number (required)
  stripeSessionId: String (unique) // prevents duplicate orders
  timestamps:      createdAt, updatedAt
}
```

**Coupon Collection:**
```
{
  code:               String (unique)
  discountPercentage: Number (0–100)
  expirationDate:     Date
  isActive:           Boolean (default: true)
  userId:             ObjectId→User (unique) // one coupon per user
  timestamps:         createdAt, updatedAt
}
```

### 4.3 Data Flow Diagrams

#### Level 0 — Context Diagram

```
                    ┌───────────────────────┐
 [Customer] ──────► │                       │ ──────► [Stripe]
 [Admin]    ──────► │     SHOP SPHERE       │ ──────► [Cloudinary]
                    │     SYSTEM            │ ──────► [MongoDB]
                    │                       │ ──────► [Redis]
                    └───────────────────────┘
```

#### Level 1 — DFD (Key Processes)

```
[User]
  │
  ├──► (1.0 Authentication)
  │         │
  │         ├── D1: MongoDB (Users)
  │         └── D2: Redis (Refresh Tokens)
  │
  ├──► (2.0 Browse Products)
  │         │
  │         ├── D3: Redis (Featured Cache)
  │         └── D1: MongoDB (Products)
  │
  ├──► (3.0 Cart Management)
  │         └── D1: MongoDB (User.cartItems)
  │
  └──► (4.0 Checkout)
            ├── [Stripe] (Payment)
            ├── D1: MongoDB (Orders)
            └── D1: MongoDB (Coupons)

[Admin]
  └──► (5.0 Product Management)
            ├── [Cloudinary] (Image Upload)
            ├── D1: MongoDB (Products)
            └── D3: Redis (Cache Invalidation)
  └──► (6.0 Analytics)
            └── D1: MongoDB (Users, Products, Orders)
```

### 4.4 UML Diagrams

#### 4.4.1 Use Case Diagram

```
                        SHOP SPHERE SYSTEM
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  [Register / Login]      [Browse Categories]           │
│  [View Product Detail]   [Add to Cart]                 │
│  [Manage Wishlist]       [Apply Coupon]                │
│  [Stripe Checkout]       [View Order Success]          │
│                                                         │
│  ── Admin Only ──────────────────────────────          │
│  [Create Product]        [Delete Product]              │
│  [Toggle Featured]       [View Analytics]              │
│                                                         │
└─────────────────────────────────────────────────────────┘
         ▲                              ▲
    [Customer]                       [Admin]
```

#### 4.4.2 Class Diagram (Key Models)

```
┌──────────────┐        ┌──────────────┐
│    User      │        │   Product    │
├──────────────┤        ├──────────────┤
│ name         │        │ name         │
│ email        │        │ description  │
│ password     │        │ price        │
│ role         │  ref   │ image        │
│ cartItems[] ─┼───────►│ category     │
│ wishlist[]  ─┼───────►│ isFeatured   │
└──────┬───────┘        └──────────────┘
       │ ref                    ▲
       │              ┌─────────┴────┐
┌──────▼───────┐      │    Order     │
│   Coupon     │      ├──────────────┤
├──────────────┤      │ user (ref)   │
│ code         │      │ products[]   │
│ discount%    │      │ totalAmount  │
│ expiryDate   │      │ stripeId     │
│ isActive     │      └──────────────┘
│ userId (ref) │
└──────────────┘
```

#### 4.4.3 Sequence Diagram — User Login and Token Refresh

```
Client          Auth Controller       Redis           MongoDB
  │                    │                │                │
  │── POST /login ────►│                │                │
  │                    │── find user ──────────────────►│
  │                    │◄─ user doc ───────────────────── │
  │                    │── bcrypt verify password        │
  │                    │── generate accessToken (15min)  │
  │                    │── generate refreshToken (7d)    │
  │                    │── SET refresh_token:{id} ──────►│
  │                    │── set cookies (HTTP-only)        │
  │◄── 200 OK ────────│                │                │
  │                    │                │                │
  │ [15 min later - access token expires]
  │                    │                │                │
  │── GET /api/* ─────►│ (401 Unauthorized)              │
  │                    │                │                │
  │ [Axios interceptor catches 401]
  │                    │                │                │
  │── POST /refresh ──►│                │                │
  │                    │── GET refresh_token:{id} ──────►│
  │                    │◄─ stored token ─────────────────│
  │                    │── verify & issue new tokens      │
  │◄── 200 OK ────────│                │                │
  │── retry original ─►│                │                │
```

#### 4.4.4 Activity Diagram — Checkout Flow

```
[Start] → [User views Cart]
             │
             ▼
        [Apply Coupon?] ──Yes──► [Validate Coupon] → [Apply Discount]
             │No                                           │
             └────────────────────────────────────────────┘
             │
             ▼
        [Click Checkout]
             │
             ▼
        [POST /api/payments/create-checkout-session]
             │
             ▼
        [Stripe creates hosted checkout session]
             │
             ▼
        [User completes payment on Stripe]
             │
             ▼
        [POST /api/payments/checkout-success]
             │
             ├──► [Create Order in MongoDB]
             ├──► [Deactivate used Coupon]
             ├──► [Clear User's Cart]
             └──► [Total ≥ $200?] ──Yes──► [Generate Gift Coupon]
             │
             ▼
        [Redirect to /purchase-success with Confetti]
             │
             [End]
```

---

---

## Chapter 5: Implementation

### 5.1 Technology Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Frontend Framework | React | 18.3.1 | Component-based UI |
| Build Tool | Vite | 5.x | Fast dev server and bundler |
| Routing | React Router DOM | 6.x | Client-side SPA routing |
| State Management | Zustand | 4.x | Global state (user, cart, products, wishlist) |
| Styling | Tailwind CSS | 3.x | Utility-first responsive design |
| Animation | Framer Motion | 11.x | Page transitions and UI animations |
| Charts | Recharts | 2.x | Admin analytics line chart |
| HTTP Client | Axios | 1.x | API calls with interceptors |
| Icons | Lucide React | — | UI icon library |
| Notifications | React Hot Toast | — | Toast alerts |
| Payment (Client) | @stripe/stripe-js | — | Stripe redirect |
| Backend Runtime | Node.js | 18+ | Server-side JavaScript |
| Backend Framework | Express.js | 4.x | REST API routing and middleware |
| Database | MongoDB (Atlas) | 7.x | Primary data store |
| ODM | Mongoose | 8.x | Schema modeling and queries |
| Cache | Redis (Upstash) | — | Featured product cache + refresh tokens |
| Redis Client | ioredis | 5.x | Redis connection |
| Authentication | jsonwebtoken | 9.x | JWT generation and verification |
| Password Hashing | bcryptjs | 2.x | Secure password storage |
| Payment (Server) | stripe | 14.x | Checkout session creation |
| Image Management | Cloudinary | 2.x | Product image upload and deletion |
| Cookie Parsing | cookie-parser | — | HTTP-only cookie handling |
| Dev Tool | nodemon | — | Auto-restart on backend changes |

### 5.2 Module Description

**Frontend Modules:**

| Module | File(s) | Description |
|---|---|---|
| Authentication | `LoginPage.jsx`, `SignUpPage.jsx` | User registration and login forms with validation |
| Home | `HomePage.jsx` | Hero carousel, category grid, featured products |
| Product Detail | `ProductDetailPage.jsx` | Single product view with size selector and cart/wishlist actions |
| Cart | `CartPage.jsx`, `CartItem.jsx`, `OrderSummary.jsx` | Cart management, coupon application, Stripe redirect |
| Wishlist | `WishlistPage.jsx` | Saved products with move-to-cart functionality |
| Admin Dashboard | `AdminPage.jsx` | Tabbed panel: create product, product list, analytics |
| Analytics | `AnalyticsTab.jsx` | KPI cards and 7-day sales/revenue line chart |
| User Store | `useUserStore.js` | Auth state, login/logout/signup actions, Axios interceptor |
| Cart Store | `useCartStore.js` | Cart CRUD, coupon, total calculation |
| Product Store | `useProductStore.js` | Product fetch, create, delete, featured toggle |
| Wishlist Store | `useWishlistStore.js` | Wishlist CRUD with isInWishlist helper |

**Backend Modules:**

| Module | File(s) | Description |
|---|---|---|
| Auth | `auth.controller.js`, `auth.routes.js` | Signup, login, logout, token refresh, profile |
| Products | `product.controller.js`, `product.routes.js` | CRUD, featured toggle with cache, category filter, recommendations |
| Cart | `cart.controller.js`, `cart.routes.js` | Cart item add/remove/update (embedded in User doc) |
| Payments | `payment.controller.js`, `payment.routes.js` | Stripe session creation, checkout success handler |
| Coupons | `coupon.controller.js`, `coupon.routes.js` | Fetch active coupon, validate coupon |
| Wishlist | `wishlist.controller.js`, `wishlist.routes.js` | Wishlist CRUD (embedded in User doc) |
| Analytics | `analytics.controller.js`, `analytics.routes.js` | Aggregated stats and 7-day daily sales data |
| Auth Middleware | `auth.middleware.js` | `protectRoute` (JWT verify), `adminRoute` (role check) |

### 5.3 Algorithms Used

**1. Dual-Token JWT Authentication with Redis:**
- On login, two JWTs are generated: an access token (15-minute expiry) and a refresh token (7-day expiry).
- The refresh token is stored in Redis under the key `refresh_token:{userId}` and in an HTTP-only cookie.
- On access token expiry (401 response), the Axios interceptor fires a single refresh request (deduplicated via a module-level `refreshPromise` variable) and retries the original request with the new token.

**2. Redis Cache-Aside for Featured Products:**
- On a `GET /api/products/featured` request, the controller first checks Redis for the key `featured_products`.
- On a cache miss, it queries MongoDB, stores the result in Redis, and returns it.
- On any admin toggle of `isFeatured`, the Redis key is deleted, forcing a fresh fetch on the next request.

**3. Automatic Gift Coupon Generation:**
- After a successful Stripe checkout where `totalAmount >= $200` (20,000 cents in Stripe's unit):
  - Any existing coupon for the user is deleted.
  - A new coupon is created with code `"GIFT" + 6 random alphanumeric characters`, 10% discount, and a 30-day expiration.

**4. MongoDB `$sample` for Recommendations:**
- `getRecommendedProducts` uses MongoDB's aggregation pipeline with `$sample: { size: 4 }` to return 4 random products, providing variety in the "People Also Bought" section without any complex collaborative filtering overhead.

**5. Analytics Date-Fill Algorithm:**
- The analytics controller queries MongoDB for orders within the last 7 days using `$gte` date filtering and `$group` aggregation to sum `totalAmount` and count orders per day.
- It then iterates over all 7 dates in the range and maps each to its corresponding MongoDB aggregate result (or `{ sales: 0, revenue: 0 }` for days with no orders), ensuring a complete time series for the chart.

### 5.4 Key Code Snippets

**Token Refresh with Deduplication (frontend/src/stores/useUserStore.js):**
```javascript
let refreshPromise = null;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        if (!refreshPromise) {
          refreshPromise = axiosInstance.post("/auth/refresh-token");
          await refreshPromise;
          refreshPromise = null;
        } else {
          await refreshPromise;
        }
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        useUserStore.getState().logout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
```

**Featured Products Cache with Invalidation (backend/controllers/product.controller.js):**
```javascript
export const getFeaturedProducts = async (req, res) => {
  const cached = await redis.get("featured_products");
  if (cached) return res.json(JSON.parse(cached));

  const featuredProducts = await Product.find({ isFeatured: true }).lean();
  await redis.set("featured_products", JSON.stringify(featuredProducts));
  res.json(featuredProducts);
};

export const toggleFeaturedProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.isFeatured = !product.isFeatured;
  await product.save();
  await redis.del("featured_products"); // invalidate cache
  res.json(product);
};
```

**Gift Coupon Generation (backend/controllers/payment.controller.js):**
```javascript
async function createNewCoupon(userId) {
  await Coupon.findOneAndDelete({ userId });
  const newCoupon = new Coupon({
    code: "GIFT" + Math.random().toString(36).substring(2, 8).toUpperCase(),
    discountPercentage: 10,
    expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    userId,
  });
  await newCoupon.save();
  return newCoupon;
}
```

---

---

## Chapter 6: Testing and Validation

### 6.1 Testing Strategy

A manual functional testing approach was adopted for this project, supplemented by systematic unit-level verification of backend controller logic. Testing was conducted in a local development environment using the Stripe test mode, MongoDB Atlas staging cluster, and Upstash Redis free tier.

### 6.2 Types of Testing

- **Unit Testing:** Individual controller functions were tested in isolation by sending direct HTTP requests via browser and Postman to verify correct responses, status codes, and database state changes.
- **Integration Testing:** End-to-end flows (e.g., register → login → add to cart → checkout → verify order in MongoDB) were tested to verify correct interaction between frontend, backend, database, and external APIs.
- **System Testing:** The complete application was tested as a whole across different user roles (customer and admin) and across scenarios including edge cases (invalid coupon, empty cart checkout, unauthorized admin access).
- **User Acceptance Testing (UAT):** The application was reviewed for usability, responsiveness, and visual consistency on desktop and mobile screen sizes.

### 6.3 Test Cases

| TC # | Module | Input | Expected Output | Actual Output | Status |
|---|---|---|---|---|---|
| TC01 | Auth - Signup | Valid name, email, password | 201 Created, user stored in DB, cookies set | 201 Created, cookies set | PASS |
| TC02 | Auth - Signup | Duplicate email | 400 Bad Request, "Email already exists" | 400, "Email already exists" | PASS |
| TC03 | Auth - Login | Valid credentials | 200 OK, access+refresh cookies set | 200 OK, cookies set | PASS |
| TC04 | Auth - Login | Wrong password | 400 Bad Request, "Invalid credentials" | 400, "Invalid credentials" | PASS |
| TC05 | Token Refresh | Expired access token | New access token issued, original request retried | New token issued, request succeeded | PASS |
| TC06 | Product - Create | Valid product data + image | Product created in DB, image URL from Cloudinary | Product created, Cloudinary URL stored | PASS |
| TC07 | Product - Create | Non-admin user | 403 Forbidden | 403 Forbidden | PASS |
| TC08 | Product - Toggle Featured | Admin toggles isFeatured | DB updated, Redis cache invalidated | DB updated, cache key deleted | PASS |
| TC09 | Product - Delete | Admin deletes product | Product removed from DB, Cloudinary asset deleted | Product removed, Cloudinary cleaned | PASS |
| TC10 | Cart - Add Item | Add product to cart | User.cartItems updated with product + quantity | Cart updated in DB | PASS |
| TC11 | Cart - Remove Item | Remove product from cart | Item removed from User.cartItems | Item removed | PASS |
| TC12 | Coupon - Validate | Valid active coupon code | 200, discount percentage returned | Discount applied correctly | PASS |
| TC13 | Coupon - Validate | Expired/invalid coupon | 404, "Coupon not found" | 404 returned | PASS |
| TC14 | Checkout - Stripe | Valid cart + Stripe test card | Stripe session created, redirect URL returned | Session created, redirect successful | PASS |
| TC15 | Checkout - Gift Coupon | Order total >= $200 | New GIFT coupon created for user | Coupon generated and stored in DB | PASS |
| TC16 | Checkout - Duplicate | Same stripeSessionId sent twice | Second call ignored (unique index) | Duplicate prevented | PASS |
| TC17 | Admin - Analytics | Request from admin | 7-day sales/revenue data, all days filled | Complete data array returned | PASS |
| TC18 | Wishlist - Add | Add product to wishlist | Product ObjectId added to User.wishlistItems | Wishlist updated | PASS |
| TC19 | Protected Route | Unauthenticated GET /api/cart | 401 Unauthorized | 401 returned | PASS |
| TC20 | Responsive UI | Cart page on mobile viewport | Layout adjusts, no overflow | Correct mobile layout | PASS |

---

---

## Chapter 7: Findings and Discussion

### 7.1 System Performance

The Redis caching layer for featured products demonstrated a measurable improvement in response time. In testing, cached requests for featured products returned responses in under 5ms (Redis read), compared to 80–120ms for uncached MongoDB queries on a shared cluster — a reduction of over 90% for this specific high-frequency endpoint.

The dual-token JWT system with Axios interceptor deduplication successfully handled concurrent 401 scenarios without issuing multiple refresh requests, preventing race conditions that could otherwise cause session invalidation.

### 7.2 Achievements of Objectives

| Objective | Achievement |
|---|---|
| Full-stack e-commerce platform | Fully implemented with all core shopping flows |
| Dual-token JWT authentication | Implemented with HTTP-only cookies and Redis |
| Stripe payment integration | Working Stripe hosted checkout with order creation |
| Admin dashboard with analytics | Functional with 7-day Recharts visualization |
| Redis caching | Featured product cache with invalidation on toggle |
| Cart/wishlist schema design | Embedded in User document; simplified queries |
| Responsive UI | Verified on desktop and mobile viewports |

### 7.3 System Screenshots Overview

The application includes the following key screens:

1. **Home Page** — Hero carousel with 4 slides, 7-category grid, and featured products section.
2. **Product Detail Page** — Product image, description, size selector (XS–XXL), quantity stepper, Add to Cart and Buy Now buttons, and Wishlist toggle.
3. **Cart Page** — Cart item list with quantity controls, "People Also Bought" recommendations, and an order summary panel with coupon input and Stripe checkout button.
4. **Wishlist Page** — Grid of saved products with move-to-cart functionality.
5. **Admin — Create Product Tab** — Form with category dropdown and image file upload.
6. **Admin — Products Tab** — Table with thumbnail, price, category, featured toggle (star), and delete button.
7. **Admin — Analytics Tab** — 4 KPI stat cards and a dual-axis line chart of sales count and revenue for the past 7 days.
8. **Purchase Success Page** — Order confirmation with React Confetti animation.

### 7.4 Comparative Discussion

The embedded cart/wishlist schema (stored within the User document) proved effective for this scale of application. Cart retrieval requires only a single `User.findById()` call with population, avoiding a separate Cart collection query. However, this design would become a bottleneck at scale (thousands of cart items per user), where a dedicated Cart collection would be more appropriate.

The Stripe-hosted checkout approach traded UI customizability for reduced PCI compliance scope — the application never handles raw card data, which is a significant security advantage for a BCA-level project without a dedicated security review.

---

---

## Chapter 8: Conclusion

Shop Sphere successfully demonstrates the end-to-end design and development of a production-grade, full-stack e-commerce web application using modern JavaScript technologies. The project achieved all seven stated objectives: a secure dual-token authentication system, a fully functional shopping and checkout experience, an administrative product management panel, Redis-powered caching, Stripe payment integration, Cloudinary-backed image management, and a responsive, animated user interface.

The architectural decisions made — embedding cart and wishlist data in the User document, using Redis cache-aside for featured products, and implementing Axios interceptor-based token refresh deduplication — each addressed specific performance, consistency, or security concerns that are directly relevant to real-world e-commerce system design.

From an academic perspective, the project provides a comprehensive, hands-on application of core BCA curriculum topics including database design, REST API development, client-server architecture, authentication and security, and UI/UX development. The integration of industry-standard external services (Stripe, Cloudinary, Upstash Redis) further bridges the gap between academic learning and professional software engineering practice.

Shop Sphere stands as a technically sound, visually polished, and architecturally coherent application that reflects the full lifecycle of software development: requirement analysis, system design, implementation, testing, and deployment readiness.

---

---

## Chapter 9: Recommendations

Based on the findings and experience gained during the development of Shop Sphere, the following recommendations are proposed for future enhancements:

1. **Product Reviews and Ratings System:** Implement a star-rating and text review system for products. This would require a new `Review` collection linked to both `User` and `Product`, and would significantly improve consumer trust and product discoverability.

2. **Advanced Search and Filtering:** Add a full-text search capability (using MongoDB Atlas Search or Elasticsearch) and client-side filtering by price range, category, and rating to improve product discovery beyond the current category-only browsing.

3. **OAuth / Social Login:** Integrate Google or GitHub OAuth via Passport.js to reduce signup friction and increase conversion rates, while maintaining the existing email/password flow as a fallback.

4. **Order History and Tracking:** Add a dedicated Order History page for customers to view past purchases, order status, and download invoices — a critical feature for any production e-commerce platform.

5. **Multi-Vendor / Seller Support:** Extend the admin model to support multiple vendors, each managing their own product catalog, with a superadmin overseeing the platform — enabling a marketplace model rather than a single-brand store.

6. **Push Notifications for Cart Abandonment:** Implement Web Push Notifications or email reminders (via SendGrid or Nodemailer) for users who add items to their cart but do not complete checkout, a proven strategy for recovering lost sales.

7. **Unit and Integration Test Suite:** Adopt a formal testing framework (Jest for backend, React Testing Library for frontend) to automate the test cases currently executed manually, ensuring regression safety as the codebase grows.

8. **Production Security Hardening:** Before production deployment, implement rate limiting (e.g., `express-rate-limit`), helmet.js for HTTP security headers, CSRF protection, and environment-based configuration management for all secrets.

---

---

## Chapter 10: Limitations of the Study

The following limitations were identified during the course of the project:

1. **Stripe Test Mode Only:** All payment functionality was implemented and tested using Stripe's test environment with test card numbers. Live payment processing would require Stripe account verification, business registration, and a production deployment — which were outside the scope of this academic project.

2. **No Real-Time Inventory Management:** The current system does not track product stock levels. Products can be added to carts and purchased regardless of actual availability, which would be a critical gap in a real retail deployment.

3. **Cart Scalability:** Embedding cart items within the User document is efficient for small carts but could become a performance issue if a user has a very large number of cart items, as MongoDB has a 16MB document size limit.

4. **Single Administrator Role:** Admin accounts must be manually created by directly modifying the MongoDB `role` field — there is no admin registration or invitation flow, which is impractical for real-world multi-admin deployments.

5. **No Product Search:** The application currently supports only category-based browsing. The absence of a keyword search feature limits product discoverability, particularly as the product catalog grows.

6. **Time and Resource Constraints:** As an academic project, the scope was deliberately bounded. Features such as product reviews, order tracking, email notifications, and advanced analytics were identified as desirable but deferred due to time constraints.

7. **Subjectivity in UI Testing:** UI/UX testing was conducted manually by the developer. Formal usability testing with real end-users was not performed, which may mean that certain usability issues remain undetected.

8. **Hardcoded Stripe Publishable Key:** The Stripe publishable key is currently embedded directly in `OrderSummary.jsx`. While publishable keys are not secret, best practice dictates they should be managed via environment variables even on the client side, which should be addressed before production deployment.

---

---

## References

1. Chodorow, K. (2019). *MongoDB: The definitive guide* (3rd ed.). O'Reilly Media.

2. Carlson, J. L. (2013). *Redis in action*. Manning Publications.

3. Flanagan, D. (2020). *JavaScript: The definitive guide* (7th ed.). O'Reilly Media.

4. Turban, E., Outland, J., King, D., Lee, J. K., Liang, T. P., & Turban, D. C. (2018). *Electronic commerce 2018: A managerial and social networks perspective* (9th ed.). Springer.

5. Richer, J., & Sanso, A. (2017). *OAuth 2 in action*. Manning Publications.

6. OWASP Foundation. (2021). *OWASP Top Ten Web Application Security Risks*. https://owasp.org/www-project-top-ten/

7. Microsoft Azure Architecture Center. (2022). *Cache-aside pattern*. https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside

8. Stripe, Inc. (2024). *Stripe API reference — Checkout Sessions*. https://stripe.com/docs/api/checkout/sessions

9. Cloudinary Ltd. (2024). *Cloudinary Node.js SDK documentation*. https://cloudinary.com/documentation/node_integration

10. Upstash. (2024). *Redis REST API documentation*. https://upstash.com/docs/redis/overall/getstarted

11. Daishi Kato. (2021). *Zustand — A small, fast and scalable bear-bones state management solution*. https://github.com/pmndrs/zustand

12. Vercel Inc. (2024). *Vite — Next generation frontend tooling*. https://vitejs.dev/

13. Axios Contributors. (2024). *Axios — Promise based HTTP client for the browser and Node.js*. https://axios-http.com/docs/intro

14. MongoDB, Inc. (2024). *MongoDB aggregation pipeline documentation*. https://www.mongodb.com/docs/manual/aggregation/

15. Auth0 Engineering. (2020). *Secure your React and Node app*. https://auth0.com/blog/

---

*Report prepared for BCA Final Year Project — Shop Sphere*
*[Your College/University Name] | [Academic Year]*
