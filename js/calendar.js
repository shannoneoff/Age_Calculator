var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  yearRange: [1900, 2023],  // Will need update for end-range year from time to time
  onSelect: function (date) {
    let result = ageCalculator(date);
    document.getElementById('result').innerHTML = "<mark>" + result + "</mark>";
  }
});