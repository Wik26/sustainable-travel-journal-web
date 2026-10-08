function getEntries() {
    return JSON.parse(localStorage.getItem("journalEntries")) || []; // retrieves entry
}

function dashboard() {
const entries = getEntries();
    // --- Recent trips --- 
    const recent = entries.slice(-3); // provides 3 trip entries from list of entries

    const container = document.getElementById("recent"); // gets hold of recent from html
    container.innerHTML = "";

    for(let i = 0; i < recent.length; i++){ // goes through items until end is reached
        const div = document.createElement("div"); // create new div element to store recent

        div.classList.add("entry_container"); // add a class called entry_container

        // properties of div inlude title, date etc
        div.innerHTML = ` 
        <h3>${recent[i].title}</h3>
        <h4>${recent[i].location}</h4>
        <p>${recent[i].date}</p>
        <p>${recent[i].co2} kg</p>
        `;

        container.appendChild(div); 
    }

    // --- Total CO2 --- 
    const totalco2 = entries.reduce((totalco2, entry) => totalco2 + Number(entry.co2), 0); // calculates total CO2 by changing entry co2 into number

    document.getElementById("totalco2").textContent = "Total CO2: " + totalco2.toFixed(2) + " kg"; // displays total CO2 inside the element totalco2
}

dashboard();

// References
// Recent Trips - Dynamic Coding with Amit. (2022, November 19). Search box with recent search list using html css and javascript [Video]. https://www.youtube.com/watch?v=JJKpx90F1og
// Slice - Brig, M (2024, December 6). JavaScript Basics - How to Use the Slice Method [Video]. https://www.youtube.com/watch?v=syY58oIsRCo
// Total CO2 - Holeczek, L. (2025). How to sum an array of numbers in JavaScript. CoreUI. https://coreui.io/answers/how-to-sum-an-array-of-numbers-in-javascript/#:~:text=Use%20reduce()%20with%20an%20accumulator%20to%20sum%20all%20array%20elements.&text=The%20reduce()%20method%20processes,current%20array%20element%20being%20processed.