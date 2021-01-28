let container = document.getElementById("container");
let brandButton = document.getElementById("backToBrands");
let nav = document.getElementById("nav");
let length;
let operatingInventory;
let juice;
function checkPage(){
	if(document.URL.includes("freebase")){
		operatingInventory = inventory;
		juice = "freebase";
	} else if(document.URL.includes("salt")){
		operatingInventory = saltInventory;
		juice = "salts";
	}
};
function navbar() {
  if (nav.className === "bar") {
    nav.className += " responsive";
  } else {
    nav.className = "bar";
	}
}
function goBack() {
	draw("logo");
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
	results = operatingInventory.filter(f => {
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
			onclick="draw('${content[a].brand}'); drawBack();">`;
	if(content[a].product == "logo"){
		block += `</div>`
	} else {
		block +=`<h1>${content[a].shelfName}</h1>
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
listen();



