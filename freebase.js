let container = document.getElementById("freebase");
let len = inventory.length;

function cleanUp(){
	container.innerHTML =`<div class="container" id="freebase"></div>`;
}

display(inventory);
let brands = document.getElementById("brands");
let flavors = document.getElementById('flavors');

let search = document.getElementById('search');
search.addEventListener("keyup", e => {
	console.log(e.target.value);
	let string = e.target.value.toLowerCase();
	cleanUp();
	let results = inventory.filter(f => {
		return(f.brand.includes(string) || f.product.includes(string));
	});
	display(results);
});

function display(lib){
	len = lib.length;
	for(a = 0; a < len; a++){
		container.innerHTML+=
		`<div class="item unselectable">
		<h1>${lib[a].shelfName}</h1>
		<img src="resources/freebase/${lib[a].brand.toLowerCase()}_${lib[a].product}.webp">
		<p>${lib[a].blurb}</p>
		</div>`;
	}	
}

