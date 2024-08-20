const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
  };

function getWeekday (date) {
  const dateNum = new Date(date);
  const dayOfWeek = dateNum.getDay(); // Returns a number between 0 and 6

  // Map the number to the name of the day
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekdayName = weekdays[dayOfWeek];

  return weekdayName;

}

function ifEmptyData(...entry) {

  for (const data of entry) {
    if (!data || data.value.length === 0) {
      return false;
    }
  }
  return true;
}