# 🦸 HeroVerse

HeroVerse is a full-stack superhero discovery application where users can search for superheroes, explore their details, discover related movies, and save their favourite heroes.

The application combines data from the SuperHero API and OMDb API into one interactive experience.

## 🚀 Live Demo

Frontend:
https://myheroverse.netlify.app

Backend API:
https://heroverse-api.onrender.com

---

# ✨ Features

## Hero Search

Users can:

- Search superheroes by name
- View hero information
- Explore powers and biography
- See hero images (not working now)


## Hero Details

Each hero page displays:

- Name
- Real identity
- Publisher
- Biography
- Power statistics
- Appearance information
- Related movies


## Movie Integration

Movies are retrieved through OMDb API.

Users can view:

- Movie title
- Release year
- Poster
- IMDb information


## Favourite Heroes

Users can:

- Add heroes to favourites
- View saved heroes
- Remove favourites


---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- React Router
- Tailwind CSS
- JavaScript


## Backend

- FastAPI
- Python
- SQLAlchemy ORM
- SQLite database


## External APIs

- SuperHero API
- OMDb API


## Deployment

Frontend:
- Netlify

Backend:
- Render


---

# 📂 Project Structure

```
Heroverse

├── frontend
│   ├── src
│   │   ├── hero
│   │   ├── favorites
│   │   ├── layout
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│

├── backend
│   ├── src
│   │   ├── database
│   │   │   ├── models.py
│   │   │   ├── db.py
│   │   │   └── crud.py
│   │   │
│   │   ├── routes
│   │   │   ├── heroes.py
│   │   │   └── favorites.py
│   │   │
│   │   ├── services
│   │   │   ├── superhero_api.py
│   │   │   └── omdb_api.py
│   │   │
│   │   └── app.py
│   │
│   └── pyproject.toml
```

---

# 💻 Local Installation


## Backend

Install uv:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Create environment:

```bash
uv init .
```

Install dependencies:

```bash
uv sync
```

Run backend:

```bash
uvicorn src.app:app --reload
```


Backend runs on:

```
http://localhost:8000
```


---

## Frontend


Install Node.js.

Create dependencies:

```bash
npm install
```


Run:

```bash
npm run dev
```


Frontend runs on:

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Backend requires:

```
SUPERHERO_API_KEY=
OMDB_API_KEY=
```

---

# 📡 API Endpoints

## Search Heroes

```
POST /heroes/search
```

Example:

```json
{
"name":"Batman"
}
```


## Hero Details

```
GET /heroes/{id}
```


## Hero Movies

```
GET /heroes/{id}/movies
```


## Add Favourite

```
POST /favorites/{hero_id}
```


## Get Favourites

```
GET /favorites
```


## Remove Favourite

```
DELETE /favorites/{favorite_id}
```


---

# ♿ Accessibility

The application includes:

- Semantic HTML elements
- Alternative text for images
- Clear navigation
- Keyboard-friendly buttons
- Responsive layout
- High contrast colours


---

# Future Improvements

Possible improvements:

- User authentication
- Persistent cloud database
- Movie filtering
- Pagination
- Better error handling
- Unit and integration tests
- Improved accessibility testing
