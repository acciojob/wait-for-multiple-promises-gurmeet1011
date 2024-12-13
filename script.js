//your JS code here. If required.
const output = document.getElementById("output");

// Add a loading row
const loadingRow = document.createElement("tr");
loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
output.appendChild(loadingRow);

// Function to create a promise that resolves after a random time (1-3 seconds)
function createPromise(name) {
  return new Promise((resolve) => {
    const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
    setTimeout(() => resolve({ name, time }), time * 1000);
  });
}

// Create an array of 3 promises
const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

// Start the timer
const startTime = performance.now();

Promise.all(promises).then((results) => {
  // Remove the loading row
  output.innerHTML = "";

  // Add rows for each resolved promise
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
    output.appendChild(row);
  });

  // Add a total row
  const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});
