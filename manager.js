let container = document.getElementById("container");
let brandButton = document.getElementById("backToBrands");
let cInv;
let oInv;
if(document.URL.includes("freebase")){
	cInv = inventory;
	oInv = "freebase";
} else if(document.URL.includes("salt")){
	cInv = saltInventory;
	oInv = "salts";
}
let manufacturers = cInv.filter(a => {
	return(a.product.includes("logo"));
});

let products;
function drawManufacturers(contents){
	container.innerHTML = "";
	length = contents.length;
	for(a = 0; a < length; a++){
		container.innerHTML +=
		`<div class="item unselectable">
		<a onclick="drawJuice('${contents[a].brand.toLowerCase()}')"><img src="resources/${oInv}/${contents[a].brand.toLowerCase()}_${contents[a].product}.webp"></a>
		</div>`;
	}
	brandButton.classList.add("active");	
};

function drawJuice(parameter){
	clearDisclaimer();
	scrollToTop();
	drawBack();
	container.innerHTML = "";
	products = cInv.filter(b => {
		return(b.shelfName.toLowerCase().includes(parameter) ||
			b.brand.toLowerCase().includes(parameter) ||
			b.blurb.toLowerCase().includes(parameter))
	});
	length = products.length;
	for(a = 0; a < length; a++){
		container.innerHTML +=
		`<div class="item unselectable">
		<img src="resources/${oInv}/${products[a].brand.toLowerCase()}_${products[a].product}.webp">
		<h1>${products[a].shelfName}</h1>
		<p>${products[a].blurb}</p>
		</div>`;
	}
	brandButton.classList.remove("active");
};

let nav = document.getElementById("nav");
let back;
function drawBack(){
	back = document.createElement('a');
	back.setAttribute('onclick','goBack()');
	back.setAttribute('id', 'back');
	back.innerText = "Back";
	if(document.getElementById("back") == undefined){
		nav.insertAdjacentElement("afterbegin", back);
	}
}
function goBack(){
	drawManufacturers(manufacturers);
	nav.removeChild(back);
}

let scrollAnimation;
function scrollToTop() {
    let position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 15);
    } else clearTimeout(scrollAnimation);
}

function clearDisclaimer(){
	let disclaimer = document.getElementsByClassName("disclaimer");
	for(b = 0; b < disclaimer.length; b++){
		disclaimer[b].innerHTML = "";
	}
}

let terms;
drawManufacturers(manufacturers);
document.getElementById("search").addEventListener("keyup", e => {
	const searchString = e.target.value.toLowerCase();
	  terms = searchString.split(" ");
	  if(terms == ""){
	  	drawManufacturers(manufacturers);
	  } else {
	  	drawJuice(terms);
	  }
});