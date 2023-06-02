function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const millisBetween = endDate.getTime() - beginDate.getTime();
  const days = millisBetween / millisecondsPerDay;
  return Math.floor(days);
}

// Return the current time
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();
  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}