// RESETS AGE RESULTS
// HTML reset button by default only resets the input, so we needed to also reset age result
function resetForm() {
  document.getElementById('years').innerHTML = '';  // Hides years result
  document.getElementById('months').innerHTML = ''; // Hides months result
}