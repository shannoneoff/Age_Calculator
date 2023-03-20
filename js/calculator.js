function ageCalculator(date) {
  const current = new Date();
  const difference = Math.abs(current - date);
  const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  return age
}