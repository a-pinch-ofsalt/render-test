document.querySelector('.send').addEventListener('click', (event) => {
    // Define the message and server URL
    const message = { text: "Hello from the client!" };
    const serverUrl = 'http://localhost:5000/reverse'; // Replace with your actual server URL

    console.log('Hallo!');

    // Use the fetch API to send the message to the server
    fetch(serverUrl, {
        method: 'POST', // or 'GET' depending on your server setup
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message) // send the message as a JSON payload
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
