from pydantic import BaseModel


class MovieSearchRequest(BaseModel):
    title: str

    class Config:
        json_schema_extra = {
            "example": {
                "title": "Batman"
            }
        }



class MovieResponse(BaseModel):

    imdb_id: str | None = None
    title: str
    year: str | None = None
    poster: str | None = None
    genre: str | None = None
    plot: str | None = None
    rating: str | None = None


    class Config:
        from_attributes = True