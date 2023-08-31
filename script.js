const newsList = document.getElementById('news-list');
const apiKey = 'addbb85d6be4456aab6e5eb0f36f34c5'; // Your NewsAPI.org API key
const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.articles.forEach(newsItem => {
            const newsCard = document.createElement('div');
            newsCard.classList.add('news-card');
            newsCard.innerHTML = `
                <img src="${newsItem.urlToImage}" alt="${newsItem.title}">
                <h2>${newsItem.title}</h2>
                <p>${newsItem.description}</p>
            `;
            newsList.appendChild(newsCard);
        });
    })
    .catch(error => console.error('Error fetching news:', error));
