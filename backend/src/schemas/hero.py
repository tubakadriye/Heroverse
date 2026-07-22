from pydantic import BaseModel


class HeroSearchRequest(BaseModel):
    name: str

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Batman"
            }
        }


class HeroResponse(BaseModel):
    superhero_id: str
    name: str
    full_name: str | None = None
    publisher: str | None = None
    image: str | None = None

    intelligence: int | None = None
    strength: int | None = None
    speed: int | None = None
    power: int | None = None

    class Config:
        from_attributes = True