export const getAll = () => {
    return fetch("http://localhost:8080/news", {
        method: "GET",
        cache: 'no-cache',
        mode: 'cors'})
        .then(response => response.json());
};

export const saveData = (data) => {
    return fetch("http://localhost:8080/news/create", {
        method: "POST",
        cache: 'no-cache',
        body: JSON.stringify(data),
        mode: 'cors'})
        .then(response => response.json());
};

export const deleteItem = (id) => {
    return fetch("http://localhost:8080/news/" + id,{
        method: "DELETE",
        cache: 'no-cache',
        mode: 'cors'})
        .then(response => response.ok);
};

export const editItem = (id, data) => {
    return fetch("http://localhost:8080/news/" + id,{
        method: "PUT",
        cache: 'no-cache',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        }})
        .then(response => response.json());
};