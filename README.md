# Secure File Sharing Backend

This is a backend system for a secure file-sharing platform that allows users to share encrypted text files.

# Install dependencies:

npm install

# Start the server:

npm start

# API Routes
Register User: POST /register
Create Encrypted File: POST /files
Add User to File: POST /files/:fileId/users
View All Files: GET /files