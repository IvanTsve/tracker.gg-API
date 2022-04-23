async function getData(url, body, method) {
    const headers = {
        method: method, // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(body)
    }
    const response = await fetch(url, headers);
    // const data = await response.json();
    return response;

}


export default getData;