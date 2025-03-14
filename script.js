function performSearch() {
    const query = document.getElementById('searchQuery').value;
    if (query) {
        // Simulating search results on the page
        const searchResults = [
            { title: "Result 1: Example Result 1", url: `https://chatgpt.com/c/${query}` },
            { title: "Result 2: Another Example", url: `https://chatgpt.com/c/${query}` },
            { title: "Result 3: More Results", url: `https://chatgpt.com/c/${query}` }
        ];

        let content = "<h3>Search Results:</h3><ul>";
        searchResults.forEach(result => {
            content += `<li><a href="${result.url}" class="search-link">${result.title}</a></li>`;
        });
        content += "</ul>";

        document.getElementById('searchResults').innerHTML = content;
    } else {
        // If no query is entered
        document.getElementById('searchResults').innerHTML = "<p>Please enter a search term.</p>";
    }
}
