let container = document.getElementById("container");
let brandButton = document.getElementById("backToBrands");
let length;
let operatingInventory;
let stringInventory;
function checkPage(){
	if(document.URL.includes("freebase")){
		operatingInventory = inventory;
		stringInventory = "freebase";
	} else if(document.URL.includes("salt")){
		operatingInventory = saltInventory;
		stringInventory = "salts";
	}
};
function filter(term){
	let results = operatingInventory.filter(f => {
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
			<img src="resources/${stringInventory}/${content[a].brand.toLowerCase()}_${content[a].product}.webp"
			onclick="draw('${content[a].brand}')">`;
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
checkPage();
draw("logo");