from sqlalchemy.orm import Session, joinedload


from . import models

def get_hero(
    db: Session,
    hero_id:str
):
    return (
        db.query(models.Hero)
        .filter(
            models.Hero.superhero_id == hero_id
        )
        .first()
    )


def create_hero(
        db: Session,
        hero_data:dict
):
    hero = models.Hero(
        superhero_id=hero_data["id"],
        name=hero_data["name"],
        full_name=hero_data["full_name"],
        publisher=hero_data["publisher"],
        image=hero_data["image"],
        intelligence=hero_data["intelligence"],
        strength=hero_data["strength"],
        speed=hero_data["speed"],
        power=hero_data["power"]
    )

    db.add(hero)
    db.commit()
    db.refresh(hero)
    return hero


def add_favorite(
        db: Session,
        hero_id:int
):
    favorite = models.Favorite(
        hero_id=hero_id
    )

    db.add(favorite)
    db.commit()
    db.refresh(favorite)

    return favorite

def remove_favorite(db: Session, favorite_id: int):

    favorite = (
        db.query(models.Favorite)
        .filter(models.Favorite.id == favorite_id)
        .first()
    )

    if favorite:
        db.delete(favorite)
        db.commit()
    return favorite


def get_favorites(db: Session):

    return (
        db.query(models.Favorite)
        .options(
            joinedload(models.Favorite.hero)
        )
        .all()
    )
#Check if already favorite
def is_favorite(db: Session, hero_id: int):

    return (
        db.query(models.Favorite)
        .filter(models.Favorite.hero_id == hero_id)
        .first()
    )

def get_hero_by_name(db: Session, name: str):

    return (
        db.query(models.Hero)
        .filter(models.Hero.name == name)
        .first()
    )

def get_movie(db: Session, imdb_id: str):

    return (
        db.query(models.Movie)
        .filter(models.Movie.imdb_id == imdb_id)
        .first()
    )

def create_movie(db: Session, movie_data: dict):

    movie = models.Movie(
        imdb_id=movie_data["imdb_id"],
        title=movie_data["title"],
        year=movie_data["year"],
        poster=movie_data["poster"],
        genre=movie_data["genre"],
        plot=movie_data["plot"],
        rating=movie_data["rating"]
    )

    db.add(movie)
    db.commit()
    db.refresh(movie)

    return movie
