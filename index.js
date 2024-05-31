const API_URL = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://coffee.alexflipnote.dev/random.json");

async function fetchCoffeeImage() {
    try {
        console.log("Fetching coffee image...");
        let res = await fetch(API_URL);
        if (res.status === 200) {
            let data = await res.json();
            let actualData = JSON.parse(data.contents);
            console.log("Data received:", actualData);
            let coffeeImage = document.getElementById("coffee-image");
            coffeeImage.src = actualData.file;
            coffeeImage.style.display = 'block';  // Ensure the image is displayed
        } else {
            alert(`Error: ${res.status} - ${res.statusText}`);
        }
    } catch (error) {
        console.error("Error fetching coffee image:", error);
    }
}

document.getElementById("new-coffee").addEventListener("click", fetchCoffeeImage);

// Fetch an initial coffee image on page load
fetchCoffeeImage();
