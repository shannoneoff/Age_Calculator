// CALCULATES AGE
function ageCalculator(date) {
  const current = new Date();
  const difference = Math.abs(current - date);
  const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  return age
}

// PIKADAY CALENDAR
var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  yearRange: [1900, 2023],  // Will need update for end-range year from time to time
  onSelect: function (date) {
    let result = ageCalculator(date);
    document.getElementById('result').innerHTML = "<mark>" + result + "</mark>";
  }
});