document.addEventListener("DOMContentLoaded", function() {


    fetch(`https://api.github.com/users/Visrael24`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('profile-pic').src = data.avatar_url;
            document.getElementById('bio').textContent = data.bio;
        })
        .catch(error => {
            console.error('There was an error fetching the data:', error);
        });
});

