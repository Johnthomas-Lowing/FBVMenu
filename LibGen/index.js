 let forbidden = ["High Nic Salts",
	"Ice Series", "Fruit Series", "Juice Co", "OverLoaded", "Orchard", "Dripper series", "Original Series",
	"eLiquids", "ELiquid", "E Liquid", "Eliquid", "Liquids", "eLiquid",
	"EJuice", "Ejuice", "eJuice",
	"Vapors", "Vapor",
	"Low Nic", "High Nic", "Nicotine", "nicotine", "Nic Salts", "nic salts", "Nic Salt", "nic salt", "Salt Nic", "salts", "Salts",
	"ml" , "mL", "ML", "Ml", "mg", "mG", "MG", "Mg"];
let producers = [
	"Air Factory","Aqua","Bad Drip","Barista Brew","Bear Naked","Binaries Cabin","Boss ","Cali Grown","California Grown","Candy King","Choices","Cloud Nurdz","Coastal Clouds","Cyber","Drex Drips","Dripmore","Element","Five Pawns Orchard | Fruit", "Five Pawns Orchard | Ice", "Five Pawns Orchard | Original", "Flum","Fresh Farms","Fresh Pressed","Frost Factory","Fruitia","Glas","Hi Drip", "InneVape", "Humble","Hyde","Jam Monster","Fruit Monster","Ice Monster","Pod Juice","Juice Head","Juice Roll","Jux","Loyalty","Magic Vapor","Mamasan","Micro Brew","Naked","Nasty","Nic River","Northwest Finest","OFE","One Up","Orgnx","PNW","PachaMama","Pod Flo","Pod Juice","Propaganda","Reds","Ripe Vapes","Ripe","River Reserve X Series","River Reserve X Series | PNW", "Ruthless","Ruze Premium","Ruze Vapor","SVRF","SWFT","Sadboy","Saucy","Savage","Shijin","SilverBack","Skwezed","Slaps","Solace","Stash Reprise","Suicide Bunny","The Hype Collection","Transistor", "Twist", "Twisted Tongue","Vapetasia","Vapor Vandals","Vaporlax","Yogi","Zephyr Vapors"
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
	for(a = 0; a < csv.length; a++){ //moving through a fixed length of whatever CSV is
		for(b = 0 ; b < terms.length; b++){ //moving through a smart length of terms
			csv[a] = csv[a].replace(`${terms[b]}`, ''); //but it only ever actually passes 'forbidden'
			csv[a] = csv[a].replace(punctuation, '');
			csv[a] = csv[a].replace(digits, '');
			csv[a] = csv[a].trim();
		}
	}
	consolidate(); //see below
}

function consolidate(){
	for(a = 0; a < csv.length; a++){
		if(products.includes(csv[a]) != true){ //the above modifcations to the array were affecting the actual csv. This leaves 2x 3x of every flavor for each strength.
			products.push(csv[a]); //just add what's not there. 'products' becomes our new shelf.
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
					currentProducers.push(producers[b]); // we only want to work with producers that are present in the data. We don't want to include flavors from other shops.
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
//I can now tell flavors how to be. This is done by hand inside vend now. Not any better of a solution. Just also not programatic at all.
{bad: "Fruit Twist", good: "Lemon Twist"},
{bad: "Green No Honeydew Melon Chew", good: "Honeydew Melon Chew"},
{bad: "Pink Iced Pink Punch Lemonade", good: "Iced Pink Punch Lemonade"},
{bad: "Crimson No Strawberry Mason", good: "Strawberry Mason"},
{bad: "Purple No", good: "Purple No 1"},
{bad: "White No", good: "White No 1"},
{bad: "Rainbow No", good: "Rainbow No 1"},
{bad: "Pink No Pink Punch", good: "Pink No 1"},
{bad: "Space No", good: "Space No 1"},
{bad: "Chilled Remix Chilled Melon Remix", good: "Chilled Melon Remix"},
{bad: "Wild Red Wild Watermelon", good: "Wild Watermelon"},
{bad: "Chilled Apple Peach", good: "Chilled Apple Pear"}
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
	for(a = 29; a < raw.length; a+=29){
		if(raw[a+5].includes("**")!= true){
			if(raw[a+7] != "1"){
				if(itemByHand(raw[a+5], raw[a+6]) != true){
					if(raw[a+6].includes("Salt")){
						if(raw[a+5].includes("Low Nic")){
							standardCSV.push(`${raw[a+6]} ${raw[a+10]} ${raw[a+12]}`);
						} else {
							saltCSV.push(`${raw[a+6]} ${raw[a+10]} ${raw[a+12]}`);
						}
					} else {
						standardCSV.push(`${raw[a+6]} ${raw[a+10]} ${raw[a+12]}`);
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
for(i = 0; i < storeList.length; i++){
	buildHTML(csvs[i], storeList[i]);
}