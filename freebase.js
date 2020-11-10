let container = document.getElementById("freebase");
let len;

function cleanUp(){
	container.innerHTML =`<div class="container" id="freebase"></div>`;
}

print(library);
let brands = document.getElementById("brands");
let flavors = document.getElementById('flavors')

let search = document.getElementById('search');
search.addEventListener("keyup", e => {
	console.log(e.target.value);
	let string = e.target.value;
	cleanUp();
	let results = library.filter(f => {
		return(f.brand.includes(string));
	});
	print(results);
});


function print(lib){
	len = lib.length;
	for(a = 0; a < len; a++){
		container.innerHTML+=`<div class="item">
						<h1>${lib[a].shelfName}</h1>
						<img src="resources/freebase/${lib[a].brand}_${lib[a].product}.jpg">
						<p>${lib[a].blurb}</p>
						</div>`;
	}	
}

