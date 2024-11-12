// profile.js
document.addEventListener('DOMContentLoaded', () => {
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const editButton = document.getElementById('edit-profile');

    // Fetch user details from localStorage or use hardcoded data
    const user = JSON.parse(localStorage.getItem('user')) || { name: 'John Doe', email: 'john.doe@example.com' };
    
    userName.textContent = user.name;
    userEmail.textContent = user.email;

    editButton.addEventListener('click', () => {
        const newName = prompt('Enter new name:', user.name);
        const newEmail = prompt('Enter new email:', user.email);

        if (newName && newEmail) {
            user.name = newName;
            user.email = newEmail;

            localStorage.setItem('user', JSON.stringify(user));

            // Update the profile page with the new values
            userName.textContent = newName;
            userEmail.textContent = newEmail;
        }
    });
});
