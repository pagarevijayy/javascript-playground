// Practicing Comparisons

// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md#appendix-b-practice-practice-practice


const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
  let [hrs, mins] = startTime.split(':');
  mins = Number(mins) + durationMinutes;

  if((hrs < 7 && mins < 30) ||
    (hrs > 17 && mins > 45)){
    return false;
  }

  return true;  
}

scheduleMeeting("7:00",15);     // false
scheduleMeeting("07:15",30);    // true
scheduleMeeting("7:30",30);     // true
scheduleMeeting("11:30",60);    // true
scheduleMeeting("17:00",45);    // true
scheduleMeeting("17:30",30);    // false
scheduleMeeting("18:00",15);    // false

