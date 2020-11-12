let container = document.getElementById("freebase");
let len = inventory.length;

function cleanUp(){
	container.innerHTML =`<div class="container" id="freebase"></div>`;
}

display(inventory);
let brands = document.getElementById("brands");
let flavors = document.getElementById('flavors');

let search = document.getElementById('search');

