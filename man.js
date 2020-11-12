let container = document.getElementById("manufacturers");
let products;
let manufacturers = inventory.filter(a => {
	return(a.product.includes("logo"));
});

function sort(man){
	container.innerHTML = "";
	products = inventory.filter(b => {
		return(b.brand.toLowerCase().includes(man));
	});
	length = products.length;
	for(a = 0; a < length; a++){
		container.innerHTML +=
		`<div class="item unselectable">
		<h1>${products[a].shelfName}</h1>
		<img src="resources/freebase/${products[a].brand.toLowerCase()}_${products[a].product}.webp">
		<p>${products[a].blurb}</p>
		</div>`;
	}
};

function display(contents){
	container.innerHTML = "";
	length = contents.length;
	for(a = 0; a < length; a++){
		container.innerHTML +=
		`<div class="item unselectable">
		<a onclick="sort('${contents[a].brand.toLowerCase()}')"><img src="resources/freebase/${contents[a].brand.toLowerCase()}_${contents[a].product}.webp"></a>
		</div>`;
	}	
};

display(manufacturers);