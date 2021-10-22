export default function date2PrettyString(date) {
  const dateArr = date.toDateString().split(' ');
  const dateString = dateArr[0] + " " + dateArr[1] + " " + dateArr[2]; // Fri Oct 22
  const timeArr = date.toTimeString().split(':');
  let timeString = timeArr[0] + ':' + timeArr[1]; // 5:40
  const hour = timeString.substring(0,2);
  const minutes = timeString.substring(2);
  console.log(hour);
  console.log(minutes);
  if (hour == 0) {
    timeString = "12" + minutes + ' a.m.'
  }
  else if (hour < 12) {
    timeString += ' a.m.'
  }
  else if (hour == 12) {
    timeString = "12" + minutes + ' p.m.'
  }
  else if (hour < 22) {
    timeString = "0" + (hour - 12) + minutes + ' p.m.'
  }
  else {
    timeString = (hour - 12) + minutes + ' p.m.'
  }
  // time string something like 09:52 p.m.
  return dateString + ' @ ' + timeString;
}
