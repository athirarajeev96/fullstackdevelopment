const API_URL = "https://openlibrary.org/authors/OL33421A.json";

function constructTable(data) {
    let tbody = document.getElementById("table-body");
    tbody.innerHTML = "";

    data.alternate_names.forEach((name, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>${data.personal_name}</td>
            <td>${data.source_records ? data.source_records.join(', ') : ''}</td>
            <td>${data.latest_revision}</td>
            <td>${data.revision}</td>
        `;
        tbody.appendChild(tr);
    });
}

async function fetchData() {
    try {
        let res = await fetch(API_URL);
        if (res.status === 200) {
            let data = await res.json();
            constructTable(data);
        } else {
            alert(`${res.status} - ${res.statusText}`);
        }
    } catch (error) {
        console.error(error);
    }
}

fetchData();
