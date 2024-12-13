//your JS code here. If required.
// Reference to the output table body
const output = document.getElementById("output");

// Add the loading row
const loadingRow = document.createElement("tr");
loadingRow.id = "loading";
loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
output.appendChild(loadingRow);

// Helper function to create a random promise
function createPromise(name) {
  return new Promise((resolve) => {
    const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    setTimeout(() => {
      resolve({ name, time: parseFloat(time.toFixed(3)) });
    }, time * 1000);
  });
}

// Track start time
const startTime = performance.now();

// Create 3 promises
const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

// Use Promise.all to wait for all promises
Promise.all(promises).then((results) => {
  // Remove the loading row
  const loadingRow = document.getElementById("loading");
  if (loadingRow) loadingRow.remove();

  // Add rows for each resolved promise
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
    output.appendChild(row);
  });

  // Calculate total time
  const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);

  // Add the total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});

