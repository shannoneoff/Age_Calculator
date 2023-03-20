// If no date is chosen for birthdate
function required(blankmessage) {
  if (blankmessage.value.length == 0) {
    alert("Please enter a birthdate");
    return false;
  }
  return true;
}