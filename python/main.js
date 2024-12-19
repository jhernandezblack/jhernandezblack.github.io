// main.js

// Content Data Map for Right Panel
const contentData = {
    "args-main": argsContent,
    "kwargs-main": kwargsContent,
    "debugging": debuggingContent,
    "generators": generatorsContent
};

// Update Main Content Dynamically
document.querySelectorAll('.sub-menu a, .sidebar-menu > li > a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const contentKey = this.getAttribute('data-content');
        const mainContent = document.getElementById('main-content');

        if (contentKey && contentData[contentKey]) {
            mainContent.innerHTML = contentData[contentKey](); // Call the corresponding function
        } else {
            mainContent.innerHTML = "<h1>Content Not Found</h1>";
        }
    });
});
