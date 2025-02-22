
---

## **Backend (README.md)**
```md
# URL Shortener - Backend

This is the backend of the **URL Shortener** application, built using **Node.js, Express, MongoDB, and JWT**.

## **Live API**
🔗 [Backend URL]https://short-link-backend-mzi1.onrender.com

## **Features**
- API to generate short URLs without third-party services.
- Stores original and shortened URLs in MongoDB.
- Tracks the number of times each short URL is accessed.
- Uses JWT authentication for security.

## **Tech Stack**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- Render for deployment

## **Installation & Setup**
### **Clone the repository**
```sh
git clone https://github.com/Ashrafpallat/Short-Link-Backend
cd backend
Install dependencies
npm install

Set up environment variables
Create a .env file in the root directory and add:
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=your_secret_key
CLIENT_URL=YOUR_FRONTEND_DEPLOYED_URL

Run the server
npm run dev

The backend will be available at http://localhost:5000

API Routes

Method	Route	        Description
POST	/api/shorten	Shorten a new URL
GET	    /api/urls	    Get all shortened URLs
GET	    /api/:shortUrl	Redirect to the original URL and update click count