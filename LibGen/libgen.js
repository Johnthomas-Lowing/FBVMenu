//TODO
//Parse data, append relevent data to new array
//Remove bad words
//Identify brand, flavor, size, and strength.
let sizes = ['30ml', '60ml', '100ml', '120ml'];
let strength = ['00mg', '03mg', '06mg', '12mg', '18mg'];
let badWords = [
	"High Nic Salts",
	"Low Nic",
	"Nicotine",
	"nicotine",
	"Nic Salts",
	"nic salts",
	"Nic Salt",
	"nic salt",
	"Salt Nic",
	"salts",
	"Salts",
	"Ice Series",
	"Fruit Series",
	"Dripper Series",
	"Original Series",
	"Juice Co",
	"OverLoaded",
	"Orchard",
	"eLiquids",
	"ELiquid",
	"E Liquid",
	"E-Liquid",
	"Eliquid",
	"Liquids",
	"EJuice",
	"Ejuice",
	"eJuice",
	"Vapors",
	"Vapor",
];
let forbidden = [

];
//These must be added by hand currently.
let badFlavors = [
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
];
//These must be added by hand currently.
let brands = [
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

let rawCSV = ["210000010373","810000431687","","","","PNW E-Liquid 30ml Arctic Tobacco 06mg","eLiquids / Standard","4","$24.44","$6.11","$13.00","53%","210000010374","810000431694","","","","PNW E-Liquid 30ml Arctic Tobacco 12mg","eLiquids / Standard","6","$36.66","$6.11","$13.00","53%","210000010380","810000432127","","","","PNW E-Liquid 30ml NW4 00mg","eLiquids / Standard","3","$18.33","$6.11","$13.00","53%"];

let structure = [];


function parse(data){
	//grab item, category, and remaining inventory value.
	for(a = 0; a < data.length; a+=12){
		//excluding any items marked ** for removal.
		if(data[a+5].includes("**") != true){
			let entry = {item: `${data[a+5]}`, category: `${data[a+6]}`, remaining: `${data[a+7]}`}
			structure.push(entry);
		}
	}
	for(a = 0; a < structure.length; a++){
		//remove bad language
		for(b = 0; b < badWords.length; b++){
			if(structure[a].item.includes(badWords[b])){
				structure[a].item = structure[a].item.replace(`${badWords[b]}`, "");
			}
		}
		//check for brands
		for(b = 0; b < brands.length; b++){
			if(structure[a].item.includes(brands[b])){
				structure[a].brand = brands[b];
				structure[a].item = structure[a].item.replace(`${brands[b]}`, "");
			}
		}
		//Check for size
		for(b = 0; b < sizes.length; b++){
			if(structure[a].item.includes(sizes[b])){
				structure[a].size = sizes[b];
				structure[a].item = structure[a].item.replace(`${sizes[b]}`, "");
			}
		}
		//Check for strength
		for(b = 0; b < strength.length; b++){
			if(structure[a].item.includes(strength[b])){
				structure[a].strength = strength[b];
				structure[a].item = structure[a].item.replace(`${strength[b]}`, "");
			}
		}
		structure[a].item = structure[a].item.trim();
	}
}


parse(rawCSV);
console.log(structure);

//example output
//{brand: "cloudnurdz", shelfName: " ", product: "logo", blurb: " "},