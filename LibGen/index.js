let forbidden = ["mg", "mG", "Mg", "MG", 
	"ml", "mL", "ML", "Ml", "High Nic Salts",
	"Ice Series", "Fruit Series", "Juice Co ", "OverLoaded", "Orchard", "Dripper series", "Original Series",
	"eLiquids", "ELiquid", "E Liquid", "Eliquid", "Liquids",
	"EJuice", "Ejuice", "eJuice",
	"Vapors",
	"Low Nic", "High Nic", "Nicotine", "nicotine", "Nic Salts", "nic salts", "Nic Salt", "nic salt", "Salt Nic", "salts", "Salts"];
let producers = [
	'Air Factory',
	'Aqua',
	'Barista Brew Co',
	'Boss ',
	'California Grown',
	'Choices',
	'Cloud Nurdz',
	'Coastal Clouds',
	//'Crisp', //Gresham
	'Cyber',
	'Drex Drips',
	'Element',
	'Five Pawns Orchard',
	'Five Pawns Original Series',
	'Fruitia',
	'Fresh Pressed',
	'Hi Drip',
	'Humble',
	'Jam Monster',
	'Juice Head',
	'Jux',
	'Lemon Twist',
	'Loyalty',
	'Magic Vapor',
	'Mamasan',
	'Micro Brew',
	'Naked',
	'Northwest Finest',
	'OFE',
	'One Up Vapor',
	'PachaMama',
	'PNW',
	'Pod Juice',
	//'Racks', //Gresham
	'Reds',
	'Ruze Premium',
	'Ripe Vapes',
	'River Reserve',
	'Ruthless',
	'Sadboy',
	'Shijin Vapor',
	'SilverBack',
	'Skwezed',
	'Solace',
	'Stash Reprise',
	'SVRF',
	'The Hype Collection',
	'Transistor',
	'Twisted Tongue',
	'Vapetasia',
	'Vapor Vandals',
	'Yogi'
];

let rawcsv = [];

let csv;
let products = []; 
const library = document.getElementById('lib');

var punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
var digits = /[0-9]/g;

function remove(terms){
	for(a = 0; a < csv.length; a++){
		for(b = 0 ; b < terms.length; b++){
			csv[a] = csv[a].replace(`${terms[b]}`, '');
			csv[a] = csv[a].replace(punctuation, '');
			csv[a] = csv[a].replace(digits, '');
			csv[a] = csv[a].trim();
		}
	}
	consolidate();
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
	libraryContents = [];
	currentProducers = [];
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
				libraryContents.push(`{brand: "${brand}", shelfName: "${shelfName}", product: "${item}", blurb: ` + "`${blurbs["+`"${brand}"`+"]["+`"${item}"`+"]}`}, <br>");
			}
		}
	}
	for(a = 0; a < libraryContents.length; a++){
		library.innerHTML += libraryContents[a];
	}
}

let standardCSV = [];
let saltCSV = [];
function processRaw(){
	for(a = 0; a < rawcsv.length; a+=12){
		if(rawcsv[a+5].includes("**")!= true){
			if(rawcsv[a+6].includes("Salt")){
				if(rawcsv[a+5].includes("Low Nic")){
					standardCSV.push(rawcsv[a+5]);
				} else {
					saltCSV.push(rawcsv[a+5]);
				}
			} else {
				standardCSV.push(rawcsv[a+5]);
			} 
		}
	}
}
processRaw();
library.innerHTML += `let inventory = [<br>`;
csv = standardCSV;
remove(forbidden);
generate();
library.innerHTML += "];<br>let saltInventory = [<br>";
csv = saltCSV;
remove(forbidden);
generate();
library.innerHTML += "];"