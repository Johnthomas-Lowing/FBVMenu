let container = document.getElementById("container");
let brandButton = document.getElementById("backToBrands");
let nav = document.getElementById("nav");
let length;
let operatingInventory;
let juice;
let store;
function checkPage(){
	if(document.URL.includes("freebase")){
		operatingInventory = 0;
		juice = "freebase";
	} else if(document.URL.includes("salt")){
		operatingInventory = 1;
		juice = "salts";
	}
	if(document.URL.includes("anchorage")){
		store = anchorage;
	} else if(document.URL.includes("battleground")){
		store = battleground;
	} else if(document.URL.includes("wasilla")){
		store = wasilla;
	} else if(document.URL.includes("fairbanks")){
		store = fairbanks;
	} else if(document.URL.includes("gresham")){
		store = gresham;
	} else if(document.URL.includes("hazeldell")){
		store = hazeldell;
	} else if(document.URL.includes("silverdale")){
		store = silverdale;
	} else if(document.URL.includes("vancouver")){
		store = vancouver;
	}
};
function navbar() {
  if (nav.className === "navbar unselectable") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
	}
}
function goTo(){
	window.scrollTo(0, 0);
}
function all(){
	container.innerHTML += `<div class="item unselectable"><img src="../../resources/all.webp" onclick="draw(' '); goTo();"></div>`;
}
function goBack() {
	draw("logo");
	all();
	nav.removeChild(back);
	document.getElementById("search").value = '';
}
function drawBack(){
	if(document.getElementById("back") == undefined){
		back = document.createElement('a');
		back.setAttribute('onclick','goBack()');
		back.setAttribute('id', 'back');
		back.innerText = "Back";
		nav.insertAdjacentElement("afterbegin", back);
	}
}
let results;
function filter(term){
	results = store[operatingInventory].filter(f => {
		return(f.brand.includes(term) ||
		f.shelfName.includes(term) ||
		f.product.includes(term) ||
		f.blurb.includes(term));
	})
	return(results);
};
let block;
function buildHTML(a, content){
	block = `<div class="item unselectable">
			<img src="../../resources/${juice}/${content[a].brand.toLowerCase()}_${content[a].product}.webp"
			`;
	if(content[a].product == "logo"){
		block += `onclick="draw('${content[a].brand}'); drawBack();"></div>`
	} else {
		block +=`><h1>${content[a].shelfName}</h1>
				<p>${content[a].blurb}</p>
				</div>`;
	}
};
function draw(handler){
	container.innerHTML = "";
	let results = filter(handler);
	for(a = 0; a < results.length; a++){
		buildHTML(a, results);
		container.innerHTML += block;
	}
};
function listen(){
	document.getElementById("search").addEventListener("keyup", e => {
		const searchString = e.target.value.toLowerCase();
		//terms = searchString.split(" ");
		if(searchString == ""){
			draw("logo");
		} else { 
			drawBack();
			draw(`${searchString}`);
		};
	});
};

checkPage();
draw("logo");
all();
listen();



