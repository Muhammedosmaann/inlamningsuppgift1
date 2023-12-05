 const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('guestList');

guestForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const mobile = document.getElementById('mobile').value;
    const comment = document.getElementById('comment').value;

    const guest = {
        name,
        address,
        mobile,
        comment
    };

    fetch('http://localhost:3000/guests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(guest),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Guest added:', data);
        // Update UI or perform actions upon successful addition
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors here
    });

    // Update UI (optional)
    const guestCard = document.createElement('div');
    guestCard.classList.add('guest-card');
    guestCard.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Comment:</strong> ${comment}</p>
    `;
    guestList.appendChild(guestCard);

    guestForm.rese3t();
});
