import os
import requests

SUPERHERO_API_KEY = os.getenv("SUPERHERO_API_KEY")
BASE_URL = f"https://superheroapi.com/api/{SUPERHERO_API_KEY}"

def search_hero(name:str):
    response = requests.get(f"{BASE_URL}/search/{name}")
    response.raise_for_status()
    return response.json()

def get_hero(hero_id: str):
    response = requests.get(f"{BASE_URL}/{hero_id}")
    response.raise_for_status()
    return response.json()

def get_powerstats(hero_id: str):
    response = requests.get(f"{BASE_URL}/{hero_id}/powerstats")
    response.raise_for_status()
    return response.json()

def get_biography(hero_id: str):
    response = requests.get(f"{BASE_URL}/{hero_id}/biography")
    response.raise_for_status()
    return response.json()

def get_appearance(hero_id: str):
    response = requests.get(f"{BASE_URL}/{hero_id}/appearance")
    response.raise_for_status()
    return response.json()

def get_work(hero_id: str):
    response = requests.get(f"{BASE_URL}/{hero_id}/work")
    response.raise_for_status()
    return response.json()


def get_connections(hero_id: str):
    response = requests.get(f"{BASE_URL}/{hero_id}/connections")
    response.raise_for_status()
    return response.json()

