from dotenv import load_dotenv

load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import favorites, heroes
from .database.db import engine
from .database.models import Base
import os

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(CORSMiddleware, 
                   allow_origins=["https://myheroverse.netlify.app",
                                  "http://localhost:5173"],
                   allow_credentials = True,
                   allow_methods=["*"],
                    allow_headers=["*"] )


app.include_router(favorites.router)
app.include_router(heroes.router)
