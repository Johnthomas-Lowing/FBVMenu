let container = document.getElementById("manufacturers");
let brandButton = document.getElementById("backToBrands");
let products;
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

function display(contents){
	container.innerHTML = "";
	length = contents.length;
	for(a = 0; a < length; a++){
		container.innerHTML +=
		`<div class="item unselectable">
		<a onclick="sort('${contents[a].brand.toLowerCase()}')"><img src="resources/${oInv}/${contents[a].brand.toLowerCase()}_${contents[a].product}.webp"></a>
		</div>`;
	}
	brandButton.classList.add("active");	
};

function sort(man){
	container.innerHTML = "";
	products = cInv.filter(b => {
		return(b.brand.toLowerCase().includes(man));
	});
	length = products.length;
	for(a = 0; a < length; a++){
		container.innerHTML +=
		`<div class="item unselectable">
		<img src="resources/${oInv}/${products[a].brand.toLowerCase()}_${products[a].product}.webp">
		<p><h1>${products[a].shelfName}</h1><br>
		${products[a].blurb}</p>
		</div>`;
	}
	brandButton.classList.remove("active");
};


display(manufacturers);