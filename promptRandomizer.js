function $(que){
  return document.getElementById(que);
}
//holds random placeholders
let placeholderLibrary = ["What does               taste like?",
	"Something that tastes...",
	"What flavors does                   make?"]
var placeholderLength = placeholderLibrary.length;
//generates random number for to determine placeholder
function randomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//executes change
document.getElementById("freebaseSearch").placeholder = placeholderLibrary[randomNum(placeholderLength)];
