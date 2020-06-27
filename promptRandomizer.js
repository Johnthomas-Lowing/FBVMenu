function $(que){
  return document.getElementById(que);
}
//holds random placeholders
let placeholderLibrary = ["What does               taste like?",
	"Something that tastes like...",
	"What flavors does                   make?",
	"Try searching by strength like '12mg'",
	"Try searching for 'menthol' flavors",
	"Search for individual flavors like 'apple'"]
var placeholderLength = placeholderLibrary.length;
//generates random number for to determine placeholder
function randomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//executes change
if(document.URL.includes("freebase.html")){
	$("freebaseSearch").placeholder = placeholderLibrary[randomNum(placeholderLength)];
} else if (document.URL.includes("nic_salts.html")){
	$("saltSearch").placeholder = placeholderLibrary[randomNum(placeholderLength)];
}