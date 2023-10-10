document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    // Replace 'your-api-endpoint' with the actual API endpoint URL.
    const apiUrl = "https://your-api-endpoint.com/users";

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process and display the data
            data.forEach(user => {
                const li = document.createElement("li");
                li.textContent = `Name: ${user.name}, Email: ${user.email}`;
                userList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
