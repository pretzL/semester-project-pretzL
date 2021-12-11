const now = new Date();
const days = now.getDay();
let type = "Closed";

switch (days) {
  case 0:
    type = "09:00 - 13:00";
    break;
  case 2:
  case 3:
  case 4:
    type = "10:00 - 16:00";
    break;
  case 5:
    type = "10:00 - 19:00";
    break;
  case 6:
    type = "09:00 - 16:00";
    break;
}
document.getElementById("opening-hours").innerHTML = `Opening Hours today: ${type}`;
