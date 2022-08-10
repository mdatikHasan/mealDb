const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

loadBuddies()
const displayBuddies = (data) => {
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddies');

    for (const buddy of buddies) {
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
                        Email: ${buddy.email}
        `;
        buddiesContainer.appendChild(p)
        console.log(buddy);
    }
}