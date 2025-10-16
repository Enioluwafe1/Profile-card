lucide.createIcons(); 

//Update timestamp with current time in milliseconds
function updateTimestamp() {
  const timeElement = document.getElementById('currentTime');
  const currentTime = Date.now();
  timeElement.textContent = currentTime;
  timeElement.setAttribute('datetime', new Date(currentTime).toISOString());
}

updateTimestamp();  // Update timestamp on page load

setInterval(updateTimestamp, 1000);  // Update every second



