fetch("https://api.example.com")
  .then(response => response.json())  // ✅ callback
  .then(data => console.log(data))
  .catch(error => console.error(error));
