document.getElementById('Form').addEventListener('submit', function(event)
 {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const foodOptions = document.getElementById('food').selectedOptions;
    if (foodOptions.length < 2) 
    {
        event.preventDefault(); // Prevent form submission
        alert("Please select at least two food options.");
    }
    const food = Array.from(foodOptions).map(option => option.text);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).innerText = firstName;
    newRow.insertCell(1).innerText = lastName;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = address;
    newRow.insertCell(4).innerText = pincode;
    newRow.insertCell(5).innerText = gender;
    newRow.insertCell(6).innerText = food;
    newRow.insertCell(7).innerText = state;
    newRow.insertCell(8).innerText = country;

    // Reset form fields
    document.getElementById('Form').reset();
});
