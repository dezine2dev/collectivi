from fastapi import APIRouter
from app.models.chat import ChatRequest
from app.services.chat import get_chat_response

router = APIRouter()

@router.post("/api/chat")
async def chat(request: ChatRequest):
    response = get_chat_response(request.message)
    return {"response": response}