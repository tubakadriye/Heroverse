from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
import requests
from io import BytesIO
from pydantic import BaseModel
from sqlalchemy.orm import Session
from ..database.db import get_db
from ..schemas.hero import HeroSearchRequest, HeroResponse
from ..database import crud
from ..services.superhero_api import (
    search_hero,
    get_appearance,
    get_biography,
    get_connections,
    get_hero,
    get_powerstats,
    get_work
)
from ..services.omdb_api import (
    search_movies,
    get_movie
)
import json
from datetime import datetime


router = APIRouter(prefix="/heroes", tags=["Heroes"])

# -----------------------------
# Search Heroes
# -----------------------------
@router.post("/search")
def search(
    request: HeroSearchRequest
):

    result = search_hero(
        request.name
    )

    if result["response"] == "error":
        raise HTTPException(
            status_code=404,
            detail=result["error"]
        )


    return result["results"]


# -----------------------------
# Hero Details
# -----------------------------
@router.get("/{hero_id}")
def hero_details(
    hero_id: str
):

    hero = get_hero(hero_id)


    if hero["response"] == "error":
        raise HTTPException(
            status_code=404,
            detail="Hero not found"
        )

    return {
        "hero": hero,
        "powerstats": get_powerstats(hero_id),
        "biography": get_biography(hero_id),
        "appearance": get_appearance(hero_id),
        "work": get_work(hero_id),
        "connections": get_connections(hero_id)
    }


@router.get("/{hero_id}/image")
def hero_image(hero_id: str):

    hero = get_hero(hero_id)

    if hero["response"] == "error":
        raise HTTPException(
            status_code=404,
            detail="Hero not found"
        )

    image_url = hero["image"]["url"]

    response = requests.get(image_url)

    if response.status_code != 200:
        raise HTTPException(
            status_code=404,
            detail="Image not found"
        )

    return StreamingResponse(
        BytesIO(response.content),
        media_type="image/jpeg"
    )

# -----------------------------
# Movies related to Hero
# -----------------------------
@router.get("/{hero_id}/movies")
def hero_movies(
    hero_id: str
):

    hero = get_hero(hero_id)


    if hero["response"] == "error":
        raise HTTPException(
            status_code=404,
            detail="Hero not found"
        )


    movies = search_movies(hero["name"])

    return movies



