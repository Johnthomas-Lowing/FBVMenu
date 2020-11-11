let brandName = prompt("Enter name of brand: ").toLowerCase().split(" ").join("");
lib.innerHTML += `{brand: "${brandName}", shelfName: " ", product: "logo", blurb: " "}, <br>`
let flavorCount = prompt("How many flavors are there?");
let flavorInt = parseInt(flavorCount);
let product;
let cleanProduct;
let shelfName;
let blurb;
const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
const reg = new RegExp('[' + punctuation + ']', 'g');
for(a = 0; a < flavorCount; a++){
	shelfName = prompt("shelfName: (name as shown on website.)");
	product = shelfName.toLowerCase().split(" ").join("");
	cleanProduct = product.replace(reg, '');
	blurb = prompt("flavor as shown on website");
	lib.innerHTML += `{brand: "${brandName}", shelfName: "${shelfName}", product: "${cleanProduct}", blurb: "${blurb}"}, <br>`
};