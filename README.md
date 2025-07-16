
# 🌟 Image Generator App

## Overview
The **Image Generator App** is a full-stack application built with React.js, Node.js, Express, MongoDB, Unsplash API, and Cloudinary. Users can generate, search, and upload images with ease.

It combines the power of the **Unsplash API** to fetch images and **Cloudinary** for image uploads and storage, providing a seamless experience.

---

## Features 🚀
1. **Search Images**: Fetch high-quality images using the Unsplash API based on user queries.  
2. **Image Upload**: Upload custom images using Cloudinary.  
3. **Dynamic UI**: Built with React.js to deliver an interactive and responsive user experience.  
4. **Backend with Express**: Handles API requests and manages the backend logic.  
5. **Database Integration**: Stores image details in MongoDB.  
6. **Secure API Key Management**: Uses environment variables for sensitive information.

---

## Tech Stack 🛠️
### **Frontend**:
- React.js  
- HTML, CSS  
- Axios for API calls  

### **Backend**:
- Node.js  
- Express.js  

### **Database**:
- MongoDB  

### **Image Handling**:
- Unsplash API (to fetch images)  
- Cloudinary (for image uploads and hosting)

---

## Setup Instructions 🧑‍💻

### **1. Clone the Repository**

```bash
git clone https://github.com/yudhimarya/Image_Generator_App.git
cd Image_Generator_App
```
**2. Install Dependencies**
Backend:
 ```bash
cd server
npm install
```
Frontend:
```bash
cd client
npm install
```
**3. Configure Environment Variables**
Create a .env file in the server directory and add the following keys:
# Unsplash API Key
UNSPLASH_API_KEY=your_unsplash_api_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# MongoDB Connection String
MONGODB_URI=your_mongodb_connection_string

# Server Port
PORT=5000

**4.Start the Application**
Start Backend Server:
cd server
npm start

Start Frontend:
cd client
npm start


Folder Structure 📂

Image_Generator_App/
│
├── client/                # React.js Frontend
│   ├── src/
│   │   ├── components/    # UI Components
│   │   ├── App.js         # Main React App
│   │   ├── index.js       # Entry Point
│   │   └── ...           
│   └── package.json
│
├── server/                # Node.js Backend
│   ├── routes/            # API Routes
│   ├── models/            # MongoDB Models
│   ├── .env               # Environment Variables
│   ├── server.js          # Main Server File
│   └── package.json
│
└── README.md              # Project Documentation



Screenshots 📸

![Screenshot 2024-12-04 111654](https://github.com/user-attachments/assets/6ca3238b-edd9-4c5c-bacc-8aaa40f8e73b)!
![Screenshot 2024-12-04 112000](https://github.com/user-attachments/assets/6d03b884-12f2-4c6a-a2c7-7d8183dae2e0)


How to Contribute 🤝
Contributions are always welcome! Here's how you can help:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Make your changes and commit them: git commit -m "Add new feature".
Push the branch: git push origin feature/your-feature-name.
Open a Pull Request.



Acknowledgements ❤️
Unsplash API for providing high-quality images.
Cloudinary for image upload and hosting services.

>>>>>>> 84313069bc5b39a806faaaa30c40a4ab98cacb44
