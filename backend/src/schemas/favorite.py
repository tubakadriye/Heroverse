from pydantic import BaseModel


class FavoriteRequest(BaseModel):
    hero_id: int

    class Config:
        json_schema_extra = {
            "example": {
                "hero_id": 70
            }
        }


class FavoriteResponse(BaseModel):
    id: int
    hero_id: int

    class Config:
        from_attributes = True