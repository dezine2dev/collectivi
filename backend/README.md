# FastAPI Backend

This project is a FastAPI-based backend with a scalable and modular directory structure, designed to handle API endpoints for basic health checks and chat responses.

---

Live Demo: [https://repulsive-marylynne-0x194-7a5f566a.koyeb.app](https://repulsive-marylynne-0x194-7a5f566a.koyeb.app)

## **Directory Structure**

The project is organized as follows:

```
project-root/
├── app/
│   ├── __init__.py          # Marks app as a package
│   ├── main.py              # Entry point for the application
│   ├── routers/             # API route definitions
│   │   ├── __init__.py
│   │   ├── health.py        # Health check routes
│   │   ├── chat.py          # Chat routes
│   ├── models/              # Pydantic models
│   │   ├── __init__.py
│   │   ├── chat.py          # ChatRequest model
│   ├── services/            # Business logic and helpers
│   │   ├── __init__.py
│   │   ├── chat.py          # Logic for predefined chat responses
├── tests/                   # Test cases for the application
│   ├── __init__.py
│   ├── test_health.py       # Test cases for health endpoint
│   ├── test_chat.py         # Test cases for chat endpoint
├── venv/                    # Virtual environment directory
├── pytest.ini               # Pytest configuration
├── requirements.txt         # Dependency file
├── manage.py                # CLI tool for running the server and tests
└── README.md                # Documentation for the backend
```

---

## **How the Backend is Designed**

### **Core Components**

1. **FastAPI**:
   - Framework for building APIs.
   - Handles routing, data validation, and server management.

2. **Routers**:
   - Organized under the `app/routers/` directory.
   - `health.py`: Defines the `/api/health` endpoint.
   - `chat.py`: Defines the `/api/chat` endpoint.

3. **Models**:
   - Defined under the `app/models/` directory using Pydantic.
   - `chat.py`: Contains the `ChatRequest` model for validating the input payload of the `/api/chat` endpoint.

4. **Services**:
   - Business logic is abstracted under the `app/services/` directory.
   - `chat.py`: Contains logic for generating predefined responses.

5. **Tests**:
   - Organized under the `tests/` directory.
   - `test_health.py`: Tests for the `/api/health` endpoint.
   - `test_chat.py`: Tests for the `/api/chat` endpoint.

---

## **How to Run the Project Locally**

### **Prerequisites**

- Python 3.10 or higher
- Virtual environment (recommended)

### **Steps to Run Locally**

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Create and Activate a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   .\venv\Scripts\activate  # Windows
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Server**:
   ```bash
   python manage.py runserver
   ```

   The server will be available at: `http://0.0.0.0:8000`

5. **Run the Tests**:
   ```bash
   python manage.py test
   ```

---

## **Building Locally**

1. **Ensure All Dependencies Are Installed**:
   Follow the steps mentioned in the "How to Run Locally" section.

2. **Check Directory Structure**:
   Make sure the directory structure matches the expected layout shown above.

3. **Run Build Commands**:
   - The project uses `uvicorn` to serve the application locally. 
   - Ensure the application is running by following the "Run the Server" steps.

4. **Verify Functionality**:
   Run the test cases to verify the functionality of the endpoints before deploying.

---

## **Endpoints**

1. **Health Check**:
   - **URL**: `/api/health`
   - **Method**: `GET`
   - **Response**:
     ```json
     { "status": "OK" }
     ```

2. **Chat API**:
   - **URL**: `/api/chat`
   - **Method**: `POST`
   - **Request Payload**:
     ```json
     { "message": "hello" }
     ```
   - **Response**:
     ```json
     { "response": "Hi there! How can I help you?" }
     ```

---

## **CLI Commands**

- **Run Server**:
  ```bash
  python manage.py runserver
  ```

- **Run Tests**:
  ```bash
  python manage.py test
  ```

- **Install Dependencies**:
  ```bash
  python manage.py install
  ```

---

Feel free to reach out if you encounter any issues or need further assistance!