const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
  };

function getWeekday(date) {  
  const dateNum = new Date(`${date}T00:00:00-04:00`);

  const dayOfWeek = dateNum.getDay(); // Returns a number between 0 and 6

  // Map the number to the name of the day
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weekdayName = weekdays[dayOfWeek];

  return weekdayName;

}

function formatDate(date) {
  const convDate = new Date(`${date}T00:00:00-04:00`);
  // Format the date to "Month Day" with the month in short form
  let options = { month: 'short', day: 'numeric' };
  let formattedDate = convDate.toLocaleDateString('en-US', options);

  return formattedDate;

}

function ifEmptyData(...entry) {

  for (const data of entry) {
    if (!data || data.value.length === 0) {
      return false;
    }
  }
  return true;
}