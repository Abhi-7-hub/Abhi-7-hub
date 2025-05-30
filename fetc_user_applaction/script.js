const container = document.getElementById('user-container');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card';


      
      card.innerHTML = `
        <div class="card-header">
          <h2>${user.name}</h2>
          <p>@${user.username}</p>
        </div>
        <div class="card-body">
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>

          <div class="address">
            <h4>📍 Address:</h4>
            <p>${user.address.street}, ${user.address.suite}</p>
            <p>${user.address.city}, ${user.address.zipcode}</p>
          </div>

          <div class="company">
            <h4>🏢 Company:</h4>
            <p><strong>${user.company.name}</strong></p>
            <p><em>${user.company.catchPhrase}</em></p>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  });
