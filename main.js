var reasons = [
  "Ranbir singh",
  "Diljeet singh",
  "Rocky singh",
"Alia singh"

];
var images = [
 "file:///C:/Users/Thispc/Pictures/Saved%20Pictures/Screenshot%202021-11-14%20123106.png",
  "file:///C:/Users/Thispc/Pictures/Saved%20Pictures/Screenshot%202021-11-14%20123555.png",
  "file:///C:/Users/Thispc/Pictures/Saved%20Pictures/Screenshot%202021-11-14%20123622.png",
  "file:///C:/Users/Thispc/Pictures/Saved%20Pictures/Screenshot%202021-11-14%20123658.png"
];

var i = 0;
function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
  document.getElementById("album").src = images[i];
  i++;
                      
 
}


