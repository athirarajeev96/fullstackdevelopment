const API_URL = "https://cat-fact.herokuapp.com/facts";
let facts = [];
let currentFactIndex = 0;

document.getElementById('fetchButton').addEventListener('click', displayNextFact);

async function fetchData() {
    try {
        let res = await fetch(API_URL);
        let data = await res.json();
        if (res.status === 200) {
            facts = data;
            displayNextFact();
        } else {
            alert(`${res.status} - ${res.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching cat facts:', error);
    }
}

function displayNextFact() {
    if (facts.length === 0) {
        fetchData();
    } else {
        const factsContainer = document.getElementById('factsContainer');
        factsContainer.innerHTML = ''; // Clear previous fact

        const fact = facts[currentFactIndex];
        const factElement = document.createElement('div');
        factElement.className = 'fact';
        factElement.innerText = fact.text;
        factsContainer.appendChild(factElement);

        // Update the index for the next fact
        currentFactIndex = (currentFactIndex + 1) % facts.length;
    }
}

// Initial fetch to load the facts
fetchData();
