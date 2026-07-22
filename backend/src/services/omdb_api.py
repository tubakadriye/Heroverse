import os
import requests
from dotenv import load_dotenv

load_dotenv()

OMDB_API_KEY = os.getenv("OMDB_API_KEY")

BASE_URL = "https://www.omdbapi.com/"

def search_movies(title: str):
    response = requests.get(
        BASE_URL,
        params={
            "apikey": OMDB_API_KEY,
            "s": title
        }
    )

    response.raise_for_status()

    return response.json()

def get_movie(imdb_id: str):
    response = requests.get(
        BASE_URL,
        params={
            "apikey": OMDB_API_KEY,
            "i": imdb_id,
            "plot": "full"
        }
    )

    response.raise_for_status()

    return response.json()