document.addEventListener('DOMContentLoaded', function () {
    // Fetch the contents of the header.html file
    fetch('header.html')
        .then(response => response.text()) // Convert the response to text
        .then(data => {
            // Insert the content of header.html into the #header-container element
            document.getElementById('header-container').innerHTML = data;

            // Once the header is loaded, apply the active link highlighting
            highlightActiveLink();
        })
        .catch(error => console.log('Error loading header:', error));
});
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the contents of the header.html file
    fetch('footer.html')
        .then(response => response.text()) // Convert the response to text
        .then(data => {
            // Insert the content of header.html into the #header-container element
            document.getElementById('footer-container').innerHTML = data;

            // Once the header is loaded, apply the active link highlighting
            highlightActiveLink();
        })
        .catch(error => console.log('Error loading header:', error));
});

// Function to highlight the current active link
function highlightActiveLink() {
    // Get the current URL's path
    const currentPath = window.location.pathname.split('/').pop();

    // Select all navigation links
    const navLinks = document.querySelectorAll('.navbar_bar a');

    // Loop through the links and add 'active' to the matching link
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}
