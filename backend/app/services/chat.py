PREDEFINED_RESPONSES = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a server, but I'm here to assist you!",
    "bye": "Goodbye! Have a great day!"
}

def get_chat_response(message: str) -> str:
    return PREDEFINED_RESPONSES.get(message.lower(), "I'm not sure how to respond to that.")