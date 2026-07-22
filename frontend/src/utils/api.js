export const useApi = () => {

    const makeRequest = async (endpoint, options = {}) => {

        const defaultOptions = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(
            `http://localhost:8000/${endpoint}`,
            {
                ...defaultOptions,
                ...options
            }
        )

        if (!response.ok) {

            const errorData = await response
                .json()
                .catch(() => null)

            throw new Error(
                errorData?.detail || "Something went wrong"
            )
        }


        return response.json()
    }

    return {
        makeRequest
    }


}