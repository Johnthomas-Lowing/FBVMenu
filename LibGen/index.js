let forbidden = ["mg", "mG", "Mg", "MG", 
	"ml", "mL", "ML", "Ml", "High Nic Salts",
	"Ice Series", "Fruit Series", "Juice Co ", "OverLoaded", "Orchard", "Dripper series", "Original Series",
	"eLiquids", "ELiquid", "E Liquid", "Eliquid", "Liquids",
	"EJuice", "Ejuice", "eJuice",
	"Vapors", "Vapor",
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
	'One Up',
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
	'Shijin',
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

let rawcsv;
let csv;
let products = []; 

let standardCSV = [];
let saltCSV = [];

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

let names = [
{bad: "Menthol Brain Freeze", good: "Brain Freeze"},
{bad: "Menthol Crisp Menthol", good: "Crisp Menthol"},
{bad: "Menthol Polar Breeze", good: "Polar Breeze"},
{bad: "Menthol Very Cool", good: "Very Cool"},
{bad: "Really Berry Very Berry", good: "Really Berry"},
{bad: "Green No Honeydew Melon Chew", good: "Honeydew Melon Chew"},
{bad: "Pink Iced Pink Punch Lemonade", good: "Iced Pink Punch Lemonade"},
{bad: "Crimson No Strawberry Mason", good: "Strawberry Mason"},
{bad: "Purple No", good: "Purple No 1"},
{bad: "White No", good: "White No 1"},
{bad: "Rainbow No", good: "Rainbow No 1"},
//  {bad: "", good: ""},
]
function generate(){
	knownProducers();
	for(a = 0; a < currentProducers.length; a++){
		libraryContents.push(`{brand: "${currentProducers[a].toLowerCase().split(" ").join("")}", shelfName: " ", product: "logo", blurb: " "}, <br>`)
		for(b = 0; b < products.length; b++){
			if(products[b].includes(currentProducers[a])){
				let brand = currentProducers[a].toLowerCase().split(" ").join("");
				products[b] = products[b].replace(`${currentProducers[a]}`, '');
				products[b] = products[b].replace(/\s\s+/g, ' ');

				//temporary i'm sorry
				for(c = 0; c < names.length; c++){
					if(products[b].includes(`${names[c].bad}`)){
						products[b] = products[b].replace(`${names[c].bad}`, (`${names[c].good}`));
					}
				}

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

function itemByHand(item, category){
	if(item.includes("River") && item.includes("Natural") || 
	   item.includes("River") && item.includes("Wolf") ||
	   item.includes("One") && item.includes("Rainbow Spectrum") ||
	   item.includes("River") && category.includes("Salt")){
		return true;
	} else {
		return false;
	}
}

function processRaw(raw){
	standardCSV = [];
	saltCSV = [];
	for(a = 0; a < raw.length; a+=12){
		if(raw[a+5].includes("**")!= true){
			if(raw[a+7] != "1"){
				if(itemByHand(raw[a+5], raw[a+6]) != true){
					if(raw[a+6].includes("Salt")){
						if(raw[a+5].includes("Low Nic")){
							standardCSV.push(raw[a+5]);
						} else {
							saltCSV.push(raw[a+5]);
						}
					} else {
						standardCSV.push(raw[a+5]);
					} 
				}
			}
		}
	}
}

function buildHTML(raw, store){
	processRaw(raw);
	library.innerHTML+= `let ${store} = [<br>[<br>`;
	csv = standardCSV;
	remove(forbidden);
	generate(); 
	library.innerHTML += "<br> ] , [ <br>";
	csv = saltCSV;
	remove(forbidden);
	generate();
	library.innerHTML += "] <br> ];<br>"
}
for(i = 0; i < list.length; i++){
	buildHTML(csvs[i], list[i]);
}