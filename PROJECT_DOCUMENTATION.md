# HeroVerse - Project Documentation

## 1. Project Overview

HeroVerse is a full-stack superhero discovery platform.

The goal was to create an engaging application where users can discover superheroes, understand their characteristics, explore related movies, and create a personal favourite collection.

The application integrates two external APIs:

- **SuperHero API** - superhero information, biography, powers, and images
- **OMDb API** - movie information related to superheroes

The application was built with:

- React + Vite (Frontend)
- Tailwind CSS (UI)
- FastAPI (Backend)
- SQLAlchemy ORM (Database layer)
- SQLite (Database)

---

# 2. Planning and Development Process (Total: approximately 10 hours)

The project was planned as a full-stack application. More time was dedicated to backend development and architecture because the goal was to create a realistic application structure rather than a simple frontend consuming APIs directly.

## Phase 1 - Planning and Research (1 hour)


Activities:

- Defined the application idea
- Evaluated available APIs
- Designed user flow
- Planned frontend and backend architecture
- Researched similar full-stack applications using FastAPI and React as a reference for the project structure

A sample application architecture was reviewed to understand the interaction between:

- FastAPI and Python on the backend
- React and JavaScript on the frontend

Reference:
https://www.youtube.com/watch?v=13tMEW8r6C0


Design decision:

Favourite heroes were stored using a database instead of browser storage because favourites are considered application data. This approach allows the application to be extended later with user accounts, synchronization, and persistent data management.


---

# Phase 2 - Backend Development

Duration:
Approximately 5 hours


Implemented:

- FastAPI application
- API routes
- External API services
- Service layer
- Database connections
- CRUD operations


Architecture:

```
FastAPI Routes
 |
Services
 |
+---- SuperHero API
|
+---- OMDb API
|
+---- Database
 |
SQLAlchemy ORM
```


Why this design?

Separating routes, services, and database logic makes the application easier to maintain and extend.


---

# Phase 3 - Database Design

Duration:
Approximately 2 hours


Database:

SQLite


ORM:

SQLAlchemy


Main entities:


## Hero

Stores:

- name
- biography
- publisher
- image
- power statistics


## Movie

Stores:

- title
- year
- poster
- IMDb information


## Favorite

Stores the relationship between saved heroes and users.


Decision:

Favorites belong to heroes, not movies.

A user thinks:

"I like Batman"

rather than:

"I like this Batman movie."


---

# Phase 4 - Frontend Development

Duration:
Approximately 3 hours


Implemented:

- React components
- Routing
- Hero Search interface
- Hero details page
- Favourite page
- Movie display


Component structure:

```
HeroSearch

      |
      v

HeroCard

      |
      v

HeroDetails

      |
      v

Favorites
```


# Phase 5 - Deployment and Testing

**Duration: ~1 hour**

Completed:

- Backend deployment
- Frontend deployment
- API connection testing
- CORS configuration
- Final verification

---

# 5. Technology Stack


## React

Chosen because:

- Component-based architecture
- Large ecosystem
- Industry standard
- Good user experience


## Vite

Chosen because:

- Fast development server
- Modern React tooling
- Simple configuration


## Tailwind CSS

Chosen because:

- Rapid UI development
- Responsive design
- Consistent styling


## FastAPI

Chosen because:

- High performance
- Simple API creation
- Automatic documentation
- Python ecosystem


## SQLAlchemy

Chosen because:

- Industry-standard ORM
- Cleaner database management
- Separates database logic from application logic


---

# 6. Technical Decisions


## API Integration

SuperHero API does not provide movie information.

Therefore:

1. Search hero from SuperHero API
2. Use hero name
3. Search movies using OMDb API


Flow:

```
Batman

↓

SuperHero API

↓

Hero details

↓

OMDb API

↓

Batman movies
```


---

# 7. Assumptions


## Favourite Definition

A favourite is defined as:

"A saved superhero that a user wants to access quickly."


Movies are not saved as favourites because the main object of interest is the superhero character.



---

# 8. Challenges


## External API limitations

Some external APIs have restrictions, especially regarding image access.

Solution:

- Added fallback handling
- Designed the application so missing external resources do not break functionality


---

## Database choice

SQLite was selected because:

- Easy setup
- Suitable for demonstration
- No external database required


For production:

- PostgreSQL
- Cloud database hosting

would be recommended.


---

# 9. Final Status


Completed:

✅ Hero search  
✅ Hero details  
✅ Power statistics  
✅ Movie integration  
✅ Favourite functionality  
✅ Backend API  
✅ Frontend deployment  
✅ Backend deployment  


---

# 10. Possible Future Improvements

If HeroVerse was developed as a commercial product:

## User accounts

Add authentication to support:

- Personal profiles
- Cloud-synchronised favourites
- User collections

(Authentication was considered, but excluded due to project time constraints.)


## AI Features

Possible improvements:

- AI-generated hero summaries
- Similar hero recommendations
- Conversational superhero assistant

## Production Improvements

Add:

- PostgreSQL database
- Automated testing
- CI/CD pipeline
- Monitoring and logging


## Testing

Add:

- Backend API tests
- Frontend component tests
- Automated deployment tests


---

# 11. Client Vision

HeroVerse can evolve from a superhero search application into a personal entertainment discovery platform.

Future users could:

- Build superhero collections
- Discover characters
- Explore movie universes
- Compare heroes
- Receive personalised recommendations

The current version provides the foundation for a scalable entertainment application.