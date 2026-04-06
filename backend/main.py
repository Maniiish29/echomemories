from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, SessionLocal
import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
@app.get("/")
def root():
    return {"message": "Backend is working"}

from sqlalchemy.orm import Session
from fastapi import Depends

@app.get("/memories")
def get_memories(db: Session = Depends(get_db)):
    return db.query(models.Memory).all()