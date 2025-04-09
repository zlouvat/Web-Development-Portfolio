const API_URL = "https://feeds.foxnews.com/foxnews/latest"
const filler_image = "filler.jpg"

// Function to fetch recent articles and create links
async function fetchAndDisplayArticles() { // async just allows certain functions to work prior to others which would stop others from working
    try {
      const response = await fetch(API_URL);
  
      if (!response.ok) {
        throw new Error(`Error fetching articles: ${response.statusText}`);
      }
  
      const articles = await response.text(); // Assuming the response is in JSON format
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(articles, "application/xml");

      // This grabs all of the items in the RSS feed, which would be all the articles
      const items = Array.from(xmlDoc.querySelectorAll("item"));

      // Container to append the links

      const container = document.getElementById('articles-container');
      container.innerHTML = ''; // Clear previous content
      
      //console.log(Array.isArray(articles));
      //console.log(articles);


      for (let i = 0; i < Math.min(items.length, 9); i++) {
        const item = items[i];
        const title = item.querySelector("title")?.textContent || "No Title";
        const url = item.querySelector("link")?.textContent || "#";
        const imgUrl = item.querySelector("content")?.getAttribute("url") || "filler.jpg";
        const link = document.createElement('a');

        link.href = url;
        link.target = '_blank';

        console.log(imgUrl)
        
        if (!imgUrl) {
            imgUrl = filler_image;
          }
        
        const image = document.createElement('img');
            image.src = imgUrl;  // Set the filler image URL
            image.alt = title;  // Alternative text for accessibility
            image.style.width = '500px';  
            image.style.height = '500px'; 
            image.style.bordercolor = "black";
            image.style.display = 'block';  // Make sure the image is a block element
        
        container.appendChild(link);
        link.appendChild(image);
      }
    } catch (error) {
      console.error(error);
      document.getElementById('articles-container').textContent = 'Failed to load articles. Please try again later.';
    }
  }
  
  // Call the function to fetch and display articles on page load
  window.onload = fetchAndDisplayArticles;