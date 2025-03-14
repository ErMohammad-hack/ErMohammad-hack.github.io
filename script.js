function performSearch() {
    const query = document.getElementById('searchQuery').value;
    const searchResultsDiv = document.getElementById('searchResults');
    
    if (query) {
        // Example search results that link to your GitHub pages
        const searchResults = [
            { title: `Page for ${query} 1`, url: `/page1.html` }, // Replace with your actual pages
            { title: `Page for ${query} 2`, url: `/page2.html` },
            { title: `Page for ${query} 3`, url: `/page3.html` }
        ];

        let content = "<h3>Search Results:</h3><ul>";
        searchResults.forEach(result => {
            content += `<li><a href="${result.url}" class="search-link">${result.title}</a></li>`;
        });
        content += "</ul>";

        searchResultsDiv.innerHTML = content;
    } else {
        searchResultsDiv.innerHTML = "<p>Please enter a search term.</p>";
    }
}
