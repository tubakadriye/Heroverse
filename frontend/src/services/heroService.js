export const searchHeroes = async (
    makeRequest,
    name
) => {

    return await makeRequest(
        "heroes/search",
        {
            method: "POST",
            body: JSON.stringify({
                name
            })
        }
    )
}



export const getHeroDetails = async (
    makeRequest,
    heroId
) => {

    return await makeRequest(
        `heroes/${heroId}`
    )
}



export const getHeroMovies = async (
    makeRequest,
    heroId
) => {

    return await makeRequest(
        `heroes/${heroId}/movies`
    )
}