from sqlalchemy import Column, Integer, String
from database import Base

class Memory(Base):
    __tablename__ = "memories"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    date = Column(String)
    description = Column(String)
    imageUrl = Column(String)