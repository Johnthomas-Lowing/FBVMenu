var library;
var searchBar;
var container;
var resourceFolder;

checkPage();
sortLibrary(library); //sorted alphabetically before drawing
drawLibrary(library); //intital, complete library

searchBar.addEventListener("keyup", e => { //updates page contents every time a character is entered
  container.innerHTML = ""; //cleans the page before returning new data
  const searchString = e.target.value.toLowerCase();
  const found = library.filter(library => {
    return (
      library.menuCard.includes(searchString) ||
      library.flavors.filter(flavor => flavor.includes(searchString)).length > 0 ||
      library.strength.filter(strength => strength.includes(searchString)).length > 0 ||
      library.names.filter(name => name.includes(searchString)).length > 0
    );
  });
  if(found.length > 0){
      drawLibrary(found);
  } else {
    drawLibrary(fourOhFour);
  };
});

function $(que){
  return document.getElementById(que);
}

function drawLibrary(q){
  q.forEach(imageSrc => {
      container.innerHTML += `<div class = "col"><div class = "row"><img src = resources/${librarySrc}/${imageSrc.menuCard} class = padding></div>`;
  });
}

function sortLibrary(lib){
  lib.sort(function(a, b){
    var letterA = a.menuCard.toLowerCase(), letterB = b.menuCard.toLowerCase()
    if (letterA > letterB) //ascending order
        return 1
  });
}

function checkPage(){
  if(document.URL.includes("freebase.html")){
    library = freebaseLibrary;
    searchBar = $("freebaseSearch");
    container = $("freebaseContainer");
    librarySrc = "freebase_images";
  } else if(document.URL.includes("nic_salts.html")){
    library = saltLibrary;
    searchBar = $("saltSearch");
    container = $("saltContainer");
    librarySrc = "salt_images";
  };
}

