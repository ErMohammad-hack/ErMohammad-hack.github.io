function performSearch() {
    const query = document.getElementById('searchQuery').value;
    if (query) {
        // Instead of redirecting, we'll show the search results in a new div
        document.getElementById('searchResults').innerHTML = `
            <h3>Search Results for: "${query}"</h3>
            <div id="searchContent"></div>
        `;

        // Simulating search result links inside the same page
        displaySearchResults(query);
    } else {
        // Alert if no query is entered
        document.getElementById('searchResults').innerHTML = "<p>Please enter a search term.</p>";
    }
}

function displaySearchResults(query) {
    // Simulating search results as internal links
    const searchResults = [
        { title: "Result 1: Example Result", url: `https://chatgpt.com/c/${query}` },
        { title: "Result 2: Another Example", url: `https://chatgpt.com/c/${query}` },
        { title: "Result 3: More Results", url: `https://chatgpt.com/c/${query}` }
    ];

    let content = "<ul>";
    searchResults.forEach(result => {
        content += `<li><a href="${result.url}" target="iframeResult" class="internal-link">${result.title}</a></li>`;
    });
    content += "</ul>";
    
    // Add search results to the page
    document.getElementById('searchContent').innerHTML = content;
}
