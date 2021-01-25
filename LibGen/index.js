let forbidden = ["mg", "ml", "mL", "ML", "Ml", 
	"**", 
	"Menthol",
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
let csv = ["Ruthless Nic Salt 30ml Ez Duz It on Ice","Ruthless Nic Salt 30ml Grape Drank","Ruthless Nic Salt 30ml Grape Drank on Ice","Ruthless Nic Salt 30ml Ez Duz It","Ruthless Nic Salt 30ml Swamp Thang","River Reserve Nicotine Salts 30ml Royal Tobacco 25mg","River Reserve Nicotine Salts 30ml Winter Berry 25mg","River Reserve Nicotine Salts 30ml Tangie 25mg","River Reserve Nicotine Salts 30ml Royal Tobacco 40mg","River Reserve Nicotine Salts 30ml Winter Berry 40mg","River Reserve Nicotine Salts 30ml Tangie 40mg","","","River Reserve Nicotine Salts 30ml Blue Island Punch 25mg","River Reserve Nicotine Salts 30ml Blue Island Punch 40mg","River Reserve Nicotine Salts 30ml Lemon Drifter 25mg","River Reserve Nicotine Salts 30ml Lemon Drifter 40mg","","","","","","Ruthless Nic Salt 30ml Strizzy","Ruthless Nic Salt 30ml Tropic Thunda","Ruthless Nic Salt 30ml Antidote on Ice","Shijin Vapor Salt Nic 50mg Phoenix","Shijin Vapor Salt Nic 50mg Dragon","Shijin Vapor Salt Nic 50mg Tortoise","Shijin Vapor Salt Nic 50mg Tiger","","","","","Glas Basix Salt 30ml 30mg Grape Drink","Glas Basix Salt 30ml 30mg Cool Melon","Juice Head Salts 30ml Watermelon Lime 25mg","Juice Head Salts 30ml Watermelon Lime 50mg","Juice Head Salts 30ml Strawberry Kiwi 25mg","Juice Head Salts 30ml Strawberry Kiwi 50mg","Juice Head Salts 30ml Peach Pear 25mg","Glas Basix Salt 30ml 50mg Juicy Apple","Glas Basix Salt 30ml 50mg Blue Magic","","","SVRF Nic Salts 30ml Satisfying 24mg","SVRF Nic Salts 30ml Satisfying 48mg","Lemon Twist Nic Salt 30ml  Iced Pink Punch Lemonade 35mg","Lemon Twist Nic Salt 30ml  Iced Pink Punch Lemonade 50mg","Lemon Twist Nic Salt 30ml  Pink Punch Lemonade 35mg","Lemon Twist Nic Salt 30ml  Pink Punch Lemonade 50mg","Lemon Twist Nic Salt 30ml  Watermelon Madness 50mg","Lemon Twist Nic Salt 30ml Watermelon Madness 35mg","Lemon Twist Nic Salt 30ml Honeydew Melon Chew 35mg","Lemon Twist Nic Salt 30ml  Honeydew Melon Chew 50mg","Juice Head Salts 30ml Pineapple Grapefruit 25mg","Juice Head Salts 30ml Pineapple Grapefruit 50mg","Juice Head Salts 30ml Peach Pear 50mg","","Vapetasia Nic Salt 30ml Rainbow Road 50mg","Vapetasia Nic Salt 30ml Royalty II Salt 50mg","","Skwezed Nic Salt 30ml Green Apple 25mg","Skwezed Nic Salt 30ml Green Apple 50mg","Skwezed Nic Salt 30ml Mango 25mg","Skwezed Nic Salt 30ml Mango 50mg","Skwezed Nic Salt 30ml Peach 25mg","Skwezed Nic Salt 30ml Peach 50mg","Skwezed Nic Salt 30ml Lychee 50mg","Skwezed Nic Salt 30ml Grapefruit 50mg","Pod Juice Nic Salt 30ml Jewel Mint 35mg","Pod Juice Nic Salt 30ml Jewel Mint 55mg","Juice Head Salts 30ml Blueberry Lemon 25mg","SVRF Nic Salts 30ml Fairgrounds 24mg","SVRF Nic Salts 30ml Golden Ticket 24mg","SVRF Nic Salts 30ml Pacific Sangha 24mg","SVRF Nic Salts 30ml Fairgrounds 48mg","SVRF Nic Salts 30ml Pacific Sangha 48mg","Cloud Nurdz Nic Salt 30ml Strawberry Lemon 25mg","Cloud Nurdz Nic Salt 30ml Grape Strawberry 25mg","Cloud Nurdz Nic Salt 30ml Grape Apple 25mg","Cloud Nurdz Nic Salt 30ml Kiwi Melon 25mg","Cloud Nurdz Nic Salt 30ml Strawberry Lemon 50mg","Cloud Nurdz Nic Salt 30ml Kiwi Melon 50mg","Vapetasia Nic Salt 30ml Killer Kustard Strawberry 50mg","Pod Juice Nic Salt 30ml Jewel Mint 20mg","","River Reserve Nicotine Salts 30ml Saltwater Creek 25mg","River Reserve Nicotine Salts 30ml Saltwater Creek 40mg","Pod Juice Nic Salt 30ml Jewel Mint Sapphire 35mg","Pod Juice Nic Salt 30ml Jewel Mint Sapphire 20mg","One Up Nic Salt 30ml Apple Melon 25mg","One Up Nic Salt 30ml Apple Melon 35mg","One Up Nic Salt 30ml Apple Melon 50mg","One Up Nic Salt 30ml Mango Ice 25mg","One Up Nic Salt 30ml Mango Ice 50mg","One Up Nic Salt 30ml Mango Ice 35mg","One Up Nic Salt 30ml Orgasm 25mg","One Up Nic Salt 30ml Orgasm Ice 25mg","One Up Nic Salt 30ml Reign Berry 25mg","One Up Nic Salt 30ml Strawberry Cheesecake 25mg","One Up Nic Salt 30ml Strawberry Gummy 25mg","One Up Nic Salt 30ml Sweet Tobacco 25mg","One Up Nic Salt 30ml Orgasm 35mg","One Up Nic Salt 30ml Orgasm Ice 35mg","One Up Nic Salt 30ml Reign Berry 35mg","One Up Nic Salt 30ml Strawberry Cheesecake 35mg","One Up Nic Salt 30ml Strawberry Gummy 35mg","One Up Nic Salt 30ml Sweet Tobacco 35mg","One Up Nic Salt 30ml Orgasm 50mg","One Up Nic Salt 30ml Reign Berry 50mg","One Up Nic Salt 30ml Strawberry Cheesecake 50mg","One Up Nic Salt 30ml Strawberry Gummy 50mg","One Up Nic Salt 30ml Sweet Tobacco 50mg","Jam Monster Salts 30ml Strawberry 48mg","Jam Monster Salts 30ml Blueberry 24mg","Jam Monster Salts 30ml Blueberry 48mg","Twisted Tongue Salts 30ml Pina Colada 24mg","Twisted Tongue Salts 30ml Pina Colada 48mg","Shijin Vapor Salt Nic 24mg Dragon","Shijin Vapor Salt Nic 24mg Phoenix","Shijin Vapor Salt Nic 24mg Tiger","Shijin Vapor Salt Nic 24mg Tortoise","Shijin Vapor Salt Nic 24mg Tortoise On Ice","Jam Monster Salts 30ml Melon Colada 24mg","Jam Monster Salts 30ml Strawmelon Apple 24mg","Jam Monster Salts 30ml Melon Colada 48mg","Jam Monster Salts 30ml Banana 48mg","Ruthless Nic Salt 30ml Paradise","Fruitia Nic Salt 30ml  Apple Kiwi Crush 35mg","Fruitia Nic Salt 30ml  Passion Fruit Guava Punch 35mg","Fruitia Nic Salt 30ml  Citrus Twist 35mg","Fruitia Nic Salt 30ml  Apple Kiwi Crush 50mg","Fruitia Nic Salt 30ml  Citrus Twist 50mg","Fruitia Nic Salt 30ml  Strawberry Coconut Refreshers 50mg","Skwezed Nic Salt 30ml Watermelon 25mg","Solace Nic Salts 30ml Blue's Lemonade 36mg","Solace Nic Salts 30ml Blue's Lemonade 48mg","Solace Nic Salts 30ml Blue's Mango 36mg","Solace Nic Salts 30ml Blue's Mango 48mg","Solace Nic Salts 30ml Grape 48mg","Solace Nic Salts 30ml Grape 36mg","Solace Nic Salts 30ml Juiced Apple 36mg","Solace Nic Salts 30ml Strawberry 36mg","Solace Nic Salts 30ml Tropic Strawberry 36mg","Solace Nic Salts 30ml Juiced Apple 48mg","Solace Nic Salts 30ml Strawberry 48mg","Solace Nic Salts 30ml Tropic Strawberry 48mg","Solace Nic Salts 30ml Banana Dragonberry 36mg","Solace Nic Salts 30ml Berry Bash 36mg","Solace Nic Salts 30ml Pineapple 36mg","Solace Nic Salts 30ml Cool Tobacco 36mg","Solace Nic Salts 30ml Dragonthol 36mg","Solace Nic Salts 30ml Seedless Watermelon 36mg","Solace Nic Salts 30ml Sea Salt Blueberry 36mg","Solace Nic Salts 30ml Lemon Lime Fusion 36mg","Solace Nic Salts 30ml Berry Bash 48mg","Solace Nic Salts 30ml Pineapple 48mg","Solace Nic Salts 30ml Lemon Lime Fusion 48mg","Solace Nic Salts 30ml Cool Tobacco 48mg","Solace Nic Salts 30ml Dragonthol 48mg","Solace Nic Salts 30ml Seedless Watermelon 48mg","Solace Nic Salts 30ml Sea Salt Blueberry 48mg","Air Factory Nic Salt 30ml Berry Rush 18mg","Air Factory Nic Salt 30ml Blue Razz 18mg","Air Factory Nic Salt 30ml Blue Razz Ice 18mg","Air Factory Nic Salt 30ml Creamy Crunch 18mg","Air Factory Nic Salt 30ml Custard 18mg","Air Factory Nic Salt 30ml Custard Tobacco 18mg","Air Factory Nic Salt 30ml Tropic Freeze 18mg","Air Factory Nic Salt 30ml Strawberry Kiwi 18mg","Air Factory Nic Salt 30ml Mixed Berry 18mg","Air Factory Nic Salt 30ml Mint 18mg","Air Factory Nic Salt 30ml Menthol 18mg","Air Factory Nic Salt 30ml Melon Lush Ice 18mg","Air Factory Nic Salt 30ml Melon Lush 18mg","Air Factory Nic Salt 30ml Mango Ice 18mg","Air Factory Nic Salt 30ml Mango 18mg","Air Factory Nic Salt 30ml Berry Rush 36mg","Air Factory Nic Salt 30ml Blue Razz 36mg","Air Factory Nic Salt 30ml Blue Razz Ice 36mg","Air Factory Nic Salt 30ml Custard Tobacco 36mg","Air Factory Nic Salt 30ml Custard 36mg","Air Factory Nic Salt 30ml Creamy Crunch 36mg","Air Factory Nic Salt 30ml Tropic Freeze 36mg","Air Factory Nic Salt 30ml Strawberry Kiwi 36mg","Air Factory Nic Salt 30ml Mixed Berry 36mg","Air Factory Nic Salt 30ml Mint 36mg","Air Factory Nic Salt 30ml Menthol 36mg","Air Factory Nic Salt 30ml Melon Lush Ice 36mg","Air Factory Nic Salt 30ml Melon Lush 36mg","Air Factory Nic Salt 30ml Mango Ice 36mg","Air Factory Nic Salt 30ml Mango 36mg","Sadboy E-Liquid 30ml Nic Salt Punch Berry Blood 48mg","Sadboy E-Liquid 30ml Nic Salt Punch Berry Blood 28mg","Sadboy E-Liquid 30ml Nic Salt Rainbow Blood 48mg","Sadboy E-Liquid 30ml Nic Salt Strawberry Blood 28mg","Sadboy E-Liquid 30ml Nic Salt Rainbow Blood 28mg","Sadboy E-Liquid 30ml Nic Salt Strawberry Blood 48mg","Sadboy E-Liquid 30ml Nic Salt Punch Berry Ice 48mg","Sadboy E-Liquid 30ml Nic Salt Punch Berry Ice 28mg","Sadboy E-Liquid 30ml Nic Salt Rainbow Ice 28mg","Sadboy E-Liquid 30ml Nic Salt Rainbow Ice 48mg","Sadboy E-Liquid 30ml Nic Salt Strawberry Ice 48mg","Sadboy E-Liquid 30ml Nic Salt Strawberry Ice 28mg","Sadboy E-Liquid 30ml Nic Salt Unicorn Tears 28mg","Sadboy E-Liquid 30ml Nic Salt Unicorn Tears 48mg","Ruthless Nic Salt 30ml Ez Duz It 35mg","Ruthless Nic Salt 30ml Ez Duz It on Ice 35mg","Ruthless Nic Salt 30ml Grape Drank 35mg","Ruthless Nic Salt 30ml Grape Drank on Ice 35mg","Ruthless Nic Salt 30ml Swamp Thang 35mg","Ruthless Nic Salt 30ml Strizzy 35mg","Ruthless Nic Salt 30ml Antidote on Ice 35mg","Ruthless Nic Salt 30ml Tropic Thunda 35mg","Ruthless Nic Salt 30ml Paradise 35mg","Juice Head Salts 30ml Guava Peach 50mg"];

let products = []; 
const library = document.getElementById('lib');

var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;


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
			if(csv[a].includes(terms[b])){
				csv[a] = csv[a].replace(`${terms[b]}`, '');
				csv[a] = csv[a].replace(/\d./,'', ' ');
				csv[a] = csv[a].replace(regex, '');
				csv[a] = csv[a].replace(/\s\s+/g, ' ');
				csv[a] = csv[a].trim();
			}
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