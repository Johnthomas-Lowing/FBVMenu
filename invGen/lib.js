let brandName = prompt("Enter name of brand: ");
let flavorCount = prompt("How many flavors are there?");
let flavorInt = parseInt(flavorCount)+1;
console.log(flavorInt);
let lib = document.getElementById("lib");
let product;
let shelfName;
let blurb;
for(a = 0; a < flavorInt; a++){
	shelfName = prompt("shelfName: (name as shown on website.)");
	if(shelfName != "logo"){
		product = shelfName.toLowerCase().split(" ").join("");
	} else {
		shelfName = " ";
		product = "logo";
	}
	blurb = prompt("flavor as shown on website");
	lib.innerHTML += `{brand: '${brandName}', shelfName: '${shelfName}', product: '${product}', blurb: '${blurb}'}, <br>`
};