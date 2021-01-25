let forbidden = ["mg", "ml", "mL", "ML", "Ml", 
	"**", 
	"100 Menthol",
	"eliquid", "eLiquid", "e-liquid", "e-Liquid", "E-Liquid", "E-liquid", "e-Liquid", "ELiquid", "Eliquid", "E Liquid", "Liquids",
	"ejuice", "eJuice", "EJuice", "e-juice", "e-Juice", "E-juice", "E-Juice", "Ejuice", "Juice Co", "Vapor", "vapor",
	"Nicotine", "nicotine", "Nic ", "nic ", "Salts", "salts", "Salt", "salt",];
let producers = [
	'Air Factory',
	'Aqua',
	'Choices',
	'Cloud Nurdz',
	'Coastal Clouds',
	'Fruitia',
	'Hi Drip',
	'Jam Monster',
	'Juice Head',
	'Lemon Twist',
	'Loyalty',
	'Magic Vapor',
	'Naked',
	'OFE',
	'One Up Vapor',
	'PachaMama',
	'PNW',
	'Pod Juice',
	'Reds',
	'River Reserve',
	'Ripe Vapes',
	'Ruthless',
	'Sadboy',
	'Shijin',
	'SilverBack',
	'Skwezed',
	"Solace",
	"SVRF",
	'The Hype Collection',
	'Transistor',
	'Vapetasia',
	
	
];
let csv = ["JUULpods 4 Pack 5% Virginia Tobacco","JUULpods 4 Pack 5% Classic Menthol","","River Reserve Nicotine Salts 30ml Tangie 25mg","River Reserve Nicotine Salts 30ml Lemon Drifter 25mg","Shijin Vapor Salt Nic 50mg Phoenix","Shijin Vapor Salt Nic 50mg Dragon","Shijin Vapor Salt Nic 50mg Tortoise Ice","Shijin Vapor Salt Nic 50mg Tortoise","Shijin Vapor Salt Nic 50mg Tiger","","","Glas Basix Salt 30ml 30mg Banana Cream Pie","Juice Head Salts 30ml Watermelon Lime 25mg","Juice Head Salts 30ml Watermelon Lime 50mg","Juice Head Salts 30ml Strawberry Kiwi 25mg","Juice Head Salts 30ml Strawberry Kiwi 50mg","Juice Head Salts 30ml Peach Pear 25mg","Glas Basix Salt 30ml 50mg Banana Cream Pie","Juice Head Salts 30ml Peach Pear 50mg","Skwezed Nic Salt 30ml Green Apple 50mg","Skwezed Nic Salt 30ml Mango 50mg","Skwezed Nic Salt 30ml Peach 25mg","Skwezed Nic Salt 30ml Peach 50mg","Skwezed Nic Salt 30ml Grapefruit 25mg","Skwezed Nic Salt 30ml Grapefruit 50mg","Juice Head Salts 30ml Blueberry Lemon 25mg","Juice Head Salts 30ml Blueberry Lemon 50mg","Cloud Nurdz Nic Salt 30ml Strawberry Lemon 25mg","Cloud Nurdz Nic Salt 30ml Peach Blue Razz 50mg","Cloud Nurdz Nic Salt 30ml Strawberry Lemon 50mg","River Reserve Nicotine Salts 30ml Saltwater Creek 25mg","River Reserve Nicotine Salts 30ml Saltwater Creek 40mg","Jam Monster Salts 30ml PB&Jam Strawberry 48mg","Jam Monster Salts 30ml PB&Jam Grape 24mg","Jam Monster Salts 30ml PB&Jam Grape 48mg","Jam Monster Salts 30ml Raspberry 24mg","Jam Monster Salts 30ml Raspberry 48mg","Jam Monster Salts 30ml Blackberry 24mg","Jam Monster Salts 30ml Blackberry 48mg","Jam Monster Salts 30ml Mangerine Guava 48mg","Shijin Vapor Salt Nic 24mg Dragon","Shijin Vapor Salt Nic 24mg Phoenix","Shijin Vapor Salt Nic 24mg Tiger","Shijin Vapor Salt Nic 24mg Tortoise","Shijin Vapor Salt Nic 24mg Tortoise On Ice","Jam Monster Salts 30ml Melon Colada 24mg","Jam Monster Salts 30ml Strawmelon Apple 24mg","Jam Monster Salts 30ml Vanilla Custard 24mg","Jam Monster Salts 30ml Blueberry Custard 24mg","Jam Monster Salts 30ml Melon Colada 48mg","Jam Monster Salts 30ml Strawmelon Apple 48mg","Jam Monster Salts 30ml Vanilla Custard 48mg","Jam Monster Salts 30ml Blueberry Custard 48mg","Jam Monster Salts 30ml Strawberry Custard 48mg","Skwezed Nic Salt 30ml Watermelon 25mg","Skwezed Nic Salt 30ml Watermelon 50mg","Solace Nic Salts 30ml Strawberry 36mg","Solace Nic Salts 30ml Strawberry 48mg","Solace Nic Salts 30ml Berry Bash 36mg","Solace Nic Salts 30ml Strawberry Kiwi Ice 36mg","Solace Nic Salts 30ml Pineapple 36mg","Solace Nic Salts 30ml Mint 36mg","Solace Nic Salts 30ml Dragonthol 36mg","Solace Nic Salts 30ml Seedless Watermelon 36mg","Solace Nic Salts 30ml Lemon Lime Fusion 36mg","Solace Nic Salts 30ml Bold Tobacco 36mg","Solace Nic Salts 30ml Blue Raspberry Lemonade Ice 36mg","Solace Nic Salts 30ml Berry Bash 48mg","Solace Nic Salts 30ml Strawberry Kiwi Ice 48mg","Solace Nic Salts 30ml Pineapple 48mg","Solace Nic Salts 30ml Lemon Lime Fusion 48mg","Solace Nic Salts 30ml Mint 48mg","Solace Nic Salts 30ml Dragonthol 48mg","Solace Nic Salts 30ml Seedless Watermelon 48mg","Solace Nic Salts 30ml Bold Tobacco 48mg","Solace Nic Salts 30ml Blue Raspberry Lemonade Ice 48mg","Juice Head Salts 30ml Guava Peach 25mg","Juice Head Salts 30ml Guava Peach 50mg"];

let products = []; 
const library = document.getElementById('lib');

var punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;


function saltCheck(){
	for(a = 0; a < csv.length; a++){
		if(csv[a].includes("Salt")){
			console.log("salts");
		}
	}
}

function remove(terms){
	for(a = 0; a < csv.length; a++){
		for(b = 0 ; b < terms.length; b++){
			csv[a] = csv[a].replace(`${terms[b]}`, '');
			csv[a] = csv[a].replace(punctuation, '');
			csv[a] = csv[a].replace(/\s\s+/g, ' ');
			csv[a] = csv[a].replace(/\d./,'', ' ');
			csv[a] = csv[a].trim();
		}
	}
}

function consolidate(){
	for(a = 0; a < csv.length; a++){
		if(products.includes(csv[a]) != true){
			products.push(csv[a]);
		}
	}
	products = products.sort();
}
let libraryContents = [];
let currentProducers = [];

function knownProducers(){
	for(a = 0 ; a < products.length; a++){
		for(b = 0; b < producers.length; b++){
			if(products[a].includes(producers[b])){
				if(currentProducers.includes(producers[b]) != true){
					currentProducers.push(producers[b]);
				}
			}
		}
	}
}


function generate(){
	knownProducers();
	for(a = 0; a < currentProducers.length; a++){
		libraryContents.push(`{brand: "${currentProducers[a].toLowerCase().split(" ").join("")}", shelfName: " ", product: "logo", blurb: " "}, <br>`)
		for(b = 0; b < products.length; b++){
			if(products[b].includes(currentProducers[a])){
				let brand = currentProducers[a].toLowerCase().split(" ").join("");
				products[b] = products[b].replace(`${currentProducers[a]}`, '');
				products[b] = products[b].replace(/\s\s+/g, ' ');
				let shelfName = products[b].trim();
				let item = shelfName.toLowerCase().split(" ").join("");
				libraryContents.push(`{brand: "${brand}", shelfName: "${shelfName}", product: "${item}", blurb: "${blurbs[brand][item]}"}, <br>`);
			}
		}
		
	}
}

remove(forbidden);
consolidate();
generate();
for(a = 0; a < libraryContents.length; a++){
	library.innerHTML += libraryContents[a];
};
console.log("Finished");