let sizes = ['30ml', '30mL', '60ml', '60mL', '100ml', '100mL', '120ml', '120mL', ];
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
let structure;
let inventory;
let library = document.getElementById("lib");

function restructure(data){
	//remove all data from our structure.
	structure = [];
	inventory = [];
	//grab item, category, and remaining inventory value.
	//starts after category toppers. (+12)
	for(a = 12; a < data.length; a+=12){
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
		//fix some bad flavors by hand :<
		for(b = 0; b < badFlavors.length; b++){
			if(structure[a].item.includes(`${badFlavors[b].bad}`)){
				structure[a].item = structure[a].item.replace(`${badFlavors[b].bad}`, `${badFlavors[b].good}`);
			}
		}
		//adds 'size: value'
		for(b = 0; b < sizes.length; b++){
			if(structure[a].item.includes(sizes[b])){
				//hmm...
				structure[a].size = [sizes[b]];
				structure[a].item = structure[a].item.replace(`${sizes[b]}`, "");
			}
		}
		//adds 'strength: value'
		for(b = 0; b < strength.length; b++){
			if(structure[a].item.includes(strength[b])){
				structure[a].strength = strength[b];
				structure[a].item = structure[a].item.replace(`${strength[b]}`, "");
			}
		}
		//adds 'brand: value'
		for(b = 0; b < brands.length; b++){
			if(structure[a].item.includes(brands[b])){
				structure[a].brand = brands[b];
				structure[a].item = structure[a].item.replace(`${brands[b]}`, "");
			}
		}
		structure[a].item = structure[a].item.trim();
		
		

	}
}


restructure(csvs[0])


//we want to build a new array full of unique inventory items
//update entries with new information as its found
//i.e. 30ml PNW Peaches 03mg -> adds Peaches to PNW, adds 30ml and 03mg to Peaches.
//60ml PNW Peaches 06mg -> adds 60ml to peaches, adds 06mg to peaches.
//at the very end, we can iterate through our inventory and paste it into a usable object
//example structure:
//{brand: "pnw", shelfName: "Cherry Limeade", product: "cherrylimeade", blurb: `${blurbs["pnw"]["cherrylimeade"]}`, strengths: "03"},