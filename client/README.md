# AI-Powered Customer Query Assistant

## Project Features

- **Real-Time Natural Language Responses:**  
  A ChatGPT-driven chatbot answers customer inquiries about products, order statuses, refunds, and store policies in real time by integrating with the Hugging Face Inference API.

- **Product Inventory Integration:**  
  The system checks customer queries for product keywords and appends additional product details to the response.

- **User Authentication & Session Management:**  
  Users can register and log in using JWT-based authentication. Sessions persist via localStorage.

- **Administrative Capabilities:**  
  Admin users can access an Admin Dashboard to view all users and delete accounts.

- **User Account Management:**  
  Users can update their username and password from the Settings page. A Profile page displays their current account details.

- **Futuristic & Minimalistic UI:**  
  The frontend uses React with Vite, Tailwind CSS, and Framer Motion for smooth, modern animations and transitions in the chat interface.

## Technologies Used

- **Backend:**

  - Node.js & Express
  - MongoDB & Mongoose
  - JSON Web Tokens (jsonwebtoken) for authentication
  - Bcrypt for password hashing
  - Axios for API calls
  - dotenv for environment configuration

- **External Services:**

  - Hugging Face Inference API (e.g., mistralai/Mistral-7B-Instruct-v0.1) for generating AI responses

- **Frontend:**
  - React (with Vite)
  - Tailwind CSS for styling
  - Framer Motion for animations
  - Axios for making HTTP requests
  - localStorage for session persistence

## Setup Instructions

1. **Clone the Repository**

   Run:

   ```
   git clone <repository-url>
   cd AI-Customer-Query-Assistant
   ```

2. **Backend Setup**

   - Navigate to the `backend` folder:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file in the backend folder with the following variables:
     ```
     PORT=5000
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     HF_API_KEY=your_huggingface_api_key
     ```
   - Start the backend server:
     ```
     npm run dev
     ```
     The backend will run on the port specified in `.env` (default is 5000).

3. **Frontend Setup**

   - Navigate to the `frontend` folder:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file in the frontend folder if needed (for Vite, use prefix `VITE_`):
     ```
     VITE_API_BASE_URL=https://<your-backend-url-or-localhost-api-endpoint>
     ```
   - Start the development server:
     ```
     npm run dev
     ```
     The frontend application will be available at the URL provided by Vite (usually http://localhost:3000).

4. **Usage**

   - Open the frontend URL in your browser.
   - Register or log in to access the chat interface.
   - Admin users will see an extra navigation tab for the Admin Dashboard where they can view and delete users.
   - From the Settings page, users can update their account details.

5. **Additional Information**

   - The **Admin Dashboard** is visible only for users with an admin role.
   - **Profile** and **Settings** pages allow users to manage their account.
   - The chat interface supports animated message transitions and line-by-line display of bot responses.
   - All error messages and API responses are handled gracefully on both the frontend and backend.
