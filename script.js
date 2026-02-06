const userCardsContainer = document.getElementById('userCards');
const searchInput = document.getElementById('search');
const darkModeToggle = document.getElementById('darkModeToggle');

let users = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        users = data;
        displayUsers(users);
    });


function displayUsers(users) {
    userCardsContainer.innerHTML = '';
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${user.name}</h2>
            <p>📧 ${user.email}</p>
            <p>📞 ${user.phone}</p>
            <p>🏠 ${user.address.city}, ${user.address.street}</p>
        `;

        userCardsContainer.appendChild(card);
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
    );

    displayUsers(filteredUsers);
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
