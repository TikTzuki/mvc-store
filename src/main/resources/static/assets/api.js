export const getCategories = async () => {
    return await fetch('/api/v1/categories',)
        .then(response => response.json())
}