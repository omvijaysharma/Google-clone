// JavaScript for updating the form action and placeholder text
function updateAction() {
    const searchForm = document.getElementById('searchForm');
    const searchEngine = document.getElementById('searchEngine');
    searchForm.action = searchEngine.value;

    // Update placeholder text dynamically
    const searchQuery = document.getElementById('searchQuery');
    switch (searchEngine.value) {
        case 'https://www.google.com/search':
            searchQuery.placeholder = "Search on Google...";
            break;
        case 'https://www.bing.com/search':
            searchQuery.placeholder = "Search on Bing...";
            break;
        case 'https://search.yahoo.com/search':
            searchQuery.placeholder = "Search on Yahoo...";
            break;
        case 'https://duckduckgo.com/':
            searchQuery.placeholder = "Search on DuckDuckGo...";
            break;
        default:
            searchQuery.placeholder = "Enter your search...";
    }
}