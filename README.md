<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
