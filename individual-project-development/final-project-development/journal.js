// --- Trip Entry Form ---
document.getElementById("entry_form").addEventListener("submit", function(e) {
  e.preventDefault(); // prevents page refresh

  const title = document.getElementById("title").value; // get values from user input 
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;
  const co2 = document.getElementById("co2").value;

  const entry = { // stores properties of object - title, location etc.
    id: Date.now().toString(),
    title: title,
    location: location,
    description: description,
    co2: co2,
    date: new Date().toLocaleDateString()
  }

  saveEntry(entry); // save object derived from user input
  displayEntries(); // display saved entries
});

function saveEntry(entry) {
  const entries = JSON.parse(localStorage.getItem("journalEntries"))|| [];// getter - get saved data from storage
  entries.push(entry); // add new entry
  localStorage.setItem("journalEntries", JSON.stringify(entries)); // setter - converts to string and saves data to storage
}

function displayEntries() {
  const container = document.getElementById("entries"); // push entries list into entries

  const entries = JSON.parse(localStorage.getItem("journalEntries")) || []; // gets items saved in journalEntries

  container.innerHTML = ""; // clear all elements once display is called

  entries.forEach(entry => {
    const div = document.createElement("div"); // creates div to store each entry

    // entry is displayed in div with title, location, description etc
    div.innerHTML = `
    <h3>${entry.title}</h3>
    <h4>${entry.location}</h4>
    <p>${entry.description}</p>
    <p>${entry.date} | CO2: ${entry.co2} kg</p>
    <button class="deleteBtn" onclick="deleteEntry('${entry.id}')">Delete</button>
    `;

    container.appendChild(div); // adds the div onto the journal page
  });
} 

function deleteEntry(id) {
  let entries = JSON.parse(localStorage.getItem("journalEntries")) || []; // get saved data from storage

  entries = entries.filter((entry) => { // filter deleted items
    return entry.id !== id; // keep entry if the id does not match
  });

  localStorage.setItem("journalEntries", JSON.stringify(entries)); // update storage with accurate list
  displayEntries();
};

displayEntries(); // display any existing entries from previous trips

// References
// Javascript Object - Gray, D (2020, September 21). Javascript Objects Explained | Javascript Objects Tutorial [Video]. https://www.youtube.com/watch?v=rLPwCAqyCAE
// Date - Mozilla. (2025). Date. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// Saving - Stack Overflow. (n.d.). JSON.parse() from localStorage issue. https://stackoverflow.com/questions/35273539/json-parse-from-localstorage-issue
// Display - Potts, T. (2022, May 10). Build a Todo List App in HTML, CSS & JavaScript with LocalStorage in 2022 | JavaScript for Beginners. [Video]. https://www.youtube.com/watch?v=6eFwtaZf6zc 
// Delete - Envato Tuts+. (2022, December 16). Build a TODO App With JavaScript (And Local Storage). [Video]. https://www.youtube.com/watch?v=y71CdVq5SvI&t=3091s