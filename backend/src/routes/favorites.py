from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session


from ..database.db import get_db
from ..database import crud
from ..services.superhero_api import get_hero


router = APIRouter(
    prefix="/favorites",
    tags=["Favorites"]
)

# -----------------------------
# Add Favorite Hero
# -----------------------------

@router.post("/{hero_id}")
def add_favorite(
    hero_id: str,
    db: Session = Depends(get_db)
):
    # Check if hero already exists in database

    hero = crud.get_hero(db, hero_id)

    # If not, fetch from SuperHero API
    if hero is None:
        hero_api = get_hero(hero_id)

        if hero_api["response"] == "error":

            raise HTTPException(
                status_code=404,
                detail="Hero not found"
            )

        hero = crud.create_hero(
            db,
            {
                "id": hero_api["id"],
                "name": hero_api["name"],
                "full_name": hero_api["biography"]["full-name"],
                "publisher": hero_api["biography"]["publisher"],
                "image": hero_api["image"]["url"],
                "intelligence": hero_api["powerstats"]["intelligence"],
                "strength": hero_api["powerstats"]["strength"],
                "speed": hero_api["powerstats"]["speed"],
                "power": hero_api["powerstats"]["power"],
            }
        )
    existing = crud.is_favorite(
        db,
        hero.id
    )


    if existing:
        raise HTTPException(
            400,
            "Already favorite"
        )
    
    favorite = crud.add_favorite(
        db,
        hero.id
    )

    return favorite


# -----------------------------
# Get Favorites
# -----------------------------

@router.get("/")
def get_favorites(
    db: Session = Depends(get_db)
):

    favorites = crud.get_favorites(db)

    return [
        {
            "id": favorite.id,
            "hero": {
                "id": favorite.hero.id,
                "superhero_id": favorite.hero.superhero_id,
                "name": favorite.hero.name,
                "full_name": favorite.hero.full_name,
                "publisher": favorite.hero.publisher
            }
        }
        for favorite in favorites
    ]

# -----------------------------
# Remove Favorite
# -----------------------------
@router.delete("/{favorite_id}")
def remove_favorite(
    favorite_id: int,
    db: Session = Depends(get_db)
):
    favorite = crud.remove_favorite(
        db,
        favorite_id
    )

    if favorite is None:
        raise HTTPException(
            status_code=404,
            detail="Favorite not found"
        )

    return {
        "message": "Favorite removed"
    }