from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
from datetime import datetime

Base = declarative_base()


class Hero(Base):
    __tablename__ = 'heroes'

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    superhero_id = Column(
        String, 
        unique=True,
        nullable=False
    )
    name = Column(String, nullable= False)
    full_name = Column(String)
    publisher = Column(String)
    image = Column(String)
    intelligence = Column(Integer)
    strength = Column(Integer)
    speed = Column(Integer)
    power = Column(Integer)
    created_at = Column(
        DateTime, default=datetime.now,
    
    )
    favorites = relationship(
        "Favorite",
        back_populates="hero"
    )

class Movie(Base):
    __tablename__ = "movies"

    id = Column(
        Integer,
        primary_key=True
    )

    imdb_id = Column(
        String,
        unique=True
    )

    title = Column(
        String,
        nullable=False
    )

    year = Column(
        String
    )

    poster = Column(
        String
    )

    genre = Column(
        String
    )

    plot = Column(
        String
    )

    rating = Column(
        String
    )

class Favorite(Base):

    __tablename__ = "favorites"

    id = Column(
        Integer,
        primary_key=True
    )

    hero_id = Column(
        Integer,
        ForeignKey("heroes.id")
    )

    created_at = Column(
        DateTime,
        default=datetime.now
    )
    hero = relationship(
        "Hero",
        back_populates="favorites"
    )








