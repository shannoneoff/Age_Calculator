// CALCULATES AGE
// Finds years result
function yearsCalculator(date) {
  const current = new Date();
  const difference = Math.abs(current - date);  // Finds difference between birthdate and current date
  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365)); // Rounds down to nearest integer
                                                                      // to find number of years
  return years
}

// Finds months result
function monthsCalculator(date) {
  const current = new Date();
  const difference = Math.abs(current - date);
  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  const decYears = Math.abs(difference / (1000 * 60 * 60 * 24 * 365));  // Finds absolute value, no rounding
  const remainder = (decYears - years).toFixed(2);  // Once years are calculated, this finds a two-decimal
                                                    // remainder for us to use to find months
  const findMonths = Math.floor(12 * remainder);  // Takes remainder and finds how many months it equals,
                                                  // then rounds down to nearest integer
  return findMonths;  
}

// PIKADAY CALENDAR
var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  yearRange: [1900, 2023],  // Will need update for end-range year from time to time
  onSelect: function (date) {
    let years = yearsCalculator(date);
    let months = monthsCalculator(date);
    document.getElementById('years').innerHTML = years + " years, ";  // Sends results to index.html
    document.getElementById('months').innerHTML = months + " months";
  }
});