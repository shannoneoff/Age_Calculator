var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  yearRange: [1900, 2023],  // Will need update
  onSelect: function (date) {
    let result = ageCalculator(date);
    document.getElementById('result').innerHTML = "age: " + result;
  }
});