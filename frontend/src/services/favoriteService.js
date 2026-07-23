export const addFavorite = async (makeRequest, heroId) => {
  return await makeRequest(`favorites/${heroId}`, {
    method: "POST",
  });
};

export const getFavorites = async (makeRequest) => {
  return await makeRequest("favorites/");
};

export const removeFavorite = async (makeRequest, favoriteId) => {
  return await makeRequest(`favorites/${favoriteId}`, {
    method: "DELETE",
  });
};
