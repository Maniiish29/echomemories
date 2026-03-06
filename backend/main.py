from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Backend is working"}

@app.get("/memories")
def get_memories():
    return [
        {"id": 1, "title": "Test memory"}
    ]