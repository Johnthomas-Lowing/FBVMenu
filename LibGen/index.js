let forbidden = ["00mg", "0mg", "03mg", "3mg", "03", "06mg", "6mg", "06", "12mg", "18mg", "15ml", "30ml", "60ml", "60mL", "60ML", "100ml", "120ml", "**", "100 Menthol", "100", "mg", "1ml",
	"eliquid", "eLiquid", "e-liquid", "e-Liquid", "E-Liquid", "E-liquid", "e-Liquid", "ELiquid", "Eliquid", "E Liquid", "Liquids",
	"ejuice", "eJuice", "EJuice", "e-juice", "e-Juice", "E-juice", "E-Juice", "Ejuice", "00", "Juice Co"];
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
	'Reds',
	'River Reserve',
	'Ruthless',
	'Sadboy',
	'Shijin',
	'SilverBack',
	"SVRF",
	'The Hype Collection',
	'Transistor',
	'Vapetasia',
	'Skwezed',
	'Ripe Vapes',
];
let csv = ["Naked 100 60ml Hawaiian POG 03mg","Naked 100 60ml Hawaiian POG 00mg","Naked 100 60ml Lava Flow 03mg","","","Naked 100 60ml Lava Flow 06mg","Naked 100 60ml Really Berry (Very Berry) 00mg","Naked 100 60ml Really Berry (Very Berry) 03mg","Naked 100 60ml Really Berry (Very Berry) 06mg","Naked 100 Menthol  Brain Freeze 00mg","Naked 100 Menthol  Brain Freeze 03mg","Naked 100 Menthol  Very Cool 00mg","Naked 100 Menthol  Very Cool 03mg","Naked 100 Menthol  Brain Freeze 06mg","Naked 100 Menthol  Very Cool 06mg","","","","Naked 100 60ml Hawaiian POG 12mg","Naked 100 60ml Lava Flow 12mg","Naked 100 60ml Really Berry (Very Berry) 12mg","","Naked 100 60ml American Patriot 00mg","Naked 100 60ml American Patriot 03mg","Naked 100 60ml American Patriot 12mg","Naked 100 60ml American Patriot 06mg","","","PNW E-Liquid 60ml Cherry Limeade 06mg","PNW E-Liquid 60ml Arctic Tobacco 03mg","PNW E-Liquid 60ml Arctic Tobacco 06mg","PNW E-Liquid 60ml Arctic Tobacco 12mg","PNW E-Liquid 60ml Arctic Tobacco 18mg","PNW E-Liquid 60ml Peach Frost 06mg","PNW E-Liquid 60ml Peach Frost 03mg","Naked 100 Menthol  Brain Freeze 12mg","Naked 100 Menthol  Very Cool 12mg","Lemon Twist 120ml Crimson No 1 (Strawberry Mason) 03mg","PNW E-Liquid 60ml Fruity O's 03mg","PNW E-Liquid 60ml Fruity O's 12mg","PNW E-Liquid 60ml Fruity O's 18mg","PNW E-Liquid 60ml Fruity O's 06mg","PNW E-Liquid 60ml Mad Batter 03mg","PNW E-Liquid 60ml Mad Batter 06mg","PNW E-Liquid 60ml Mad Batter 12mg","PNW E-Liquid 60ml Mad Batter 18mg","PNW E-Liquid 60ml NW4 03mg","PNW E-Liquid 60ml NW4 06mg","PNW E-Liquid 60ml NW4 12mg","PNW E-Liquid 60ml NW4 18mg","PNW E-Liquid 60ml Peach Frost 12mg","PNW E-Liquid 60ml Peach Frost 18mg","PNW E-Liquid 60ml Peaches 03mg","PNW E-Liquid 60ml Peaches 06mg","PNW E-Liquid 60ml Peaches 12mg","PNW E-Liquid 60ml Peaches 18mg","PNW E-Liquid 60ml Vanilla Nut Latte 03mg","PNW E-Liquid 60ml Vanilla Nut Latte 06mg","PNW E-Liquid 60ml Vanilla Nut Latte 12mg","PNW E-Liquid 60ml Vanilla Nut Latte 18mg","PNW E-Liquid 60ml Cinnamon Crunch 03mg","PNW E-Liquid 60ml Cinnamon Crunch 06mg","PNW E-Liquid 60ml Cinnamon Crunch 12mg","PNW E-Liquid 60ml Cinnamon Crunch 18mg","PNW E-Liquid 60ml Blueberry Muffin 03mg","PNW E-Liquid 60ml Blueberry Muffin 06mg","PNW E-Liquid 60ml Blueberry Muffin 12mg","PNW E-Liquid 60ml Blueberry Muffin 18mg","PNW E-Liquid 60ml Cherry Limeade 03mg","PNW E-Liquid 60ml Cherry Limeade 12mg","PNW E-Liquid 60ml Cherry Limeade 18mg","PNW E-Liquid 60ml Arctic Frost 03mg","PNW E-Liquid 60ml Arctic Frost 06mg","PNW E-Liquid 60ml Arctic Frost 12mg","PNW E-Liquid 60ml Arctic Frost 18mg","PNW E-Liquid 60ml Spearmint 03mg","PNW E-Liquid 60ml Spearmint 06mg","PNW E-Liquid 60ml Spearmint 12mg","PNW E-Liquid 60ml Spearmint 18mg","Naked 100 Menthol  Crisp Menthol 00mg","Naked 100 Menthol  Crisp Menthol 03mg","Naked 100 Menthol  Crisp Menthol 06mg","Naked 100 Menthol  Crisp Menthol 12mg","PNW E-Liquid 30ml Arctic Tobacco 00mg","PNW E-Liquid 30ml Arctic Tobacco 03mg","PNW E-Liquid 30ml Arctic Tobacco 06mg","PNW E-Liquid 30ml Arctic Tobacco 12mg","PNW E-Liquid 30ml Arctic Tobacco 18mg","PNW E-Liquid 30ml Fruity O's 00mg","PNW E-Liquid 30ml Mad Batter 00mg","PNW E-Liquid 30ml NW4 00mg","PNW E-Liquid 30ml Fruity O's 03mg","PNW E-Liquid 30ml Mad Batter 03mg","PNW E-Liquid 30ml NW4 03mg","PNW E-Liquid 30ml Fruity O's 06mg","PNW E-Liquid 30ml Mad Batter 06mg","PNW E-Liquid 30ml NW4 06mg","PNW E-Liquid 30ml Fruity O's 12mg","PNW E-Liquid 30ml Mad Batter 12mg","PNW E-Liquid 30ml NW4 12mg","PNW E-Liquid 30ml Fruity O's 18mg","PNW E-Liquid 30ml Mad Batter 18mg","PNW E-Liquid 30ml NW4 18mg","PNW E-Liquid 30ml Peach Frost 00mg","PNW E-Liquid 30ml Peaches 00mg","PNW E-Liquid 30ml Vanilla Nut Latte 00mg","PNW E-Liquid 30ml Cinnamon Crunch 00mg","PNW E-Liquid 30ml Peach Frost 03mg","PNW E-Liquid 30ml Peaches 03mg","PNW E-Liquid 30ml Vanilla Nut Latte 03mg","PNW E-Liquid 30ml Cinnamon Crunch 03mg","PNW E-Liquid 30ml Peach Frost 06mg","PNW E-Liquid 30ml Peach Frost 12mg","PNW E-Liquid 30ml Peach Frost 18mg","PNW E-Liquid 30ml Peaches 12mg","PNW E-Liquid 30ml Peaches 18mg","PNW E-Liquid 30ml Vanilla Nut Latte 06mg","PNW E-Liquid 30ml Vanilla Nut Latte 12mg","PNW E-Liquid 30ml Vanilla Nut Latte 18mg","PNW E-Liquid 30ml Cinnamon Crunch 06mg","PNW E-Liquid 30ml Cinnamon Crunch 12mg","PNW E-Liquid 30ml Cinnamon Crunch 18mg","PNW E-Liquid 30ml Blueberry Muffin 00mg","PNW E-Liquid 30ml Cherry Limeade 00mg","PNW E-Liquid 30ml Blueberry Muffin 03mg","PNW E-Liquid 30ml Cherry Limeade 03mg","PNW E-Liquid 30ml Blueberry Muffin 06mg","PNW E-Liquid 30ml Cherry Limeade 06mg","PNW E-Liquid 30ml Blueberry Muffin 12mg","PNW E-Liquid 30ml Cherry Limeade 12mg","PNW E-Liquid 30ml Blueberry Muffin 18mg","PNW E-Liquid 30ml Cherry Limeade 18mg","River Reserve 60mL  Northwest 00mg","River Reserve 60mL  Northwest 03mg","River Reserve 60mL  Northwest 12mg","River Reserve 60mL  Great Wall 06mg","River Reserve 60mL  Great Wall 00mg","River Reserve 60mL  Tiger's Blood 03mg","River Reserve 60mL  Northwest 06mg","River Reserve 60mL  Great Wall 12mg","River Reserve 60mL  Great Wall 03mg","River Reserve 60mL  Tiger's Blood 00mg","River Reserve 60mL  Tiger's Blood 06mg","River Reserve 60mL  Tiger's Blood 12mg","River Reserve 60mL  Wiki 00mg","River Reserve 60mL  Wiki 03mg","River Reserve 60mL  Wiki 06mg","River Reserve 60mL  Wiki 12mg","River Reserve 60mL  Eddy 00mg","River Reserve 60mL  Eddy 03mg","River Reserve 60mL  Eddy 12mg","River Reserve 60mL  Eddy 06mg","River Reserve 60mL  Caramel Cove 06mg","River Reserve 60mL  Swamp Mama 06mg","River Reserve 60mL  Caramel Cove 12mg","River Reserve 60mL  Swamp Mama 12mg","River Reserve 60mL  Swamp Mama 18mg","River Reserve 60mL  PBG 12mg","River Reserve 60mL  Caramel Cove 03mg","River Reserve 60mL  Swamp Mama 03mg","River Reserve 60mL  Swamp Mama 00mg","River Reserve 60mL  PBG 00mg","River Reserve 60mL  PBG 03mg","River Reserve 60mL  PBG 06mg","River Reserve 60mL  Caramel Cove 00mg","River Reserve 60mL  River Colada 00mg","River Reserve 60mL  River Colada 03mg","River Reserve 60mL  River Colada 06mg","River Reserve 60mL  River Colada 12mg","River Reserve 60mL  Drifter 12mg","River Reserve 60mL  Drifter 06mg","River Reserve 60mL  Drifter 03mg","River Reserve 60mL  Drifter 00mg","River Reserve 60mL  Midori Sour 00mg","River Reserve 60mL  Drifter X 00mg","River Reserve 60mL  Drifter X 03mg","River Reserve 60mL  Drifter X 06mg","River Reserve 60mL  Drifter X 12mg","River Reserve 60mL  Lemon Drifter 00mg","River Reserve 60mL  Bandit 00mg","River Reserve 60mL  Strawberry Drifter 00mg","River Reserve 60mL  Lemon Drifter 03mg","River Reserve 60mL  Bandit 03mg","River Reserve 60mL  Strawberry Drifter 03mg","River Reserve 60mL  Blackberry Waffle Cone 00mg","River Reserve 60mL  Strawberry Waffle Cone 00mg","River Reserve 60mL  Blackberry Waffle Cone 03mg","River Reserve 60mL  Strawberry Waffle Cone 03mg","River Reserve 60mL  Blackberry Waffle Cone 06mg","River Reserve 60mL  Strawberry Waffle Cone 06mg","River Reserve 60mL  Lemon Drifter 06mg","River Reserve 60mL  Bandit 06mg","River Reserve 60mL  Strawberry Drifter 06mg","River Reserve 60mL  Lemon Drifter 12mg","River Reserve 60mL  Bandit 12mg","River Reserve 60mL  Strawberry Drifter 12mg","River Reserve 60mL  Blackberry Waffle Cone 12mg","River Reserve 60mL  Strawberry Waffle Cone 12mg","River Reserve 60mL  Blue Island Punch 00mg","River Reserve 60mL  Blue Island Punch 03mg","River Reserve 60mL  Blue Island Punch 06mg","PNW E-Liquid 30ml Arctic Frost 00mg","PNW E-Liquid 30ml Spearmint 00mg","PNW E-Liquid 30ml Spearmint 03mg","PNW E-Liquid 30ml Arctic Frost 03mg","PNW E-Liquid 30ml Arctic Frost 06mg","PNW E-Liquid 30ml Spearmint 06mg","PNW E-Liquid 30ml Arctic Frost 12mg","PNW E-Liquid 30ml Spearmint 12mg","PNW E-Liquid 30ml Arctic Frost 18mg","PNW E-Liquid 30ml Spearmint 18mg","River Reserve 60mL  Sweet Cream Butterscotch 00mg","River Reserve 60mL  Sweet Cream Butterscotch 03mg","River Reserve 60mL  Sweet Cream Butterscotch 06mg","River Reserve 60mL  Sweet Cream Butterscotch 12mg","River Reserve 60mL  Strawnana Drifter 00mg","River Reserve 60mL  Strawnana Drifter 03mg","River Reserve 60mL  Strawnana Drifter 06mg","River Reserve 60mL  Strawnana Drifter 12mg","River Reserve 60mL  Vanilla Graham 00mg","River Reserve 60mL  Vanilla Graham 03mg","River Reserve 60mL  Vanilla Graham 06mg","River Reserve 60mL  Vanilla Graham 12mg","Aqua 60ml Pure 03mg","Aqua 60ml Pure 06mg","Aqua 60ml Flow 03mg","Aqua 60ml Flow 06mg","Aqua 60ml Oasis 00mg","Aqua 60ml Oasis 03mg","Aqua 60ml Oasis 06mg","Jam Monster Liquids Strawberry 03mg","Jam Monster Liquids Strawberry 06mg","Jam Monster Liquids Blueberry 03mg","Jam Monster Liquids Blueberry 06mg","River Reserve 60mL  Vanilla Bandit 00mg","River Reserve 60mL  Vanilla Bandit 03mg","River Reserve 60mL  Vanilla Bandit 06mg","River Reserve 60mL  Vanilla Bandit 12mg","Skwezed 100ml E- Liquid Green Apple 06mg","Skwezed 100ml E- Liquid Grapefruit 06mg","Skwezed 100ml E- Liquid Grapefruit 03mg","Skwezed 100ml E- Liquid Grapefruit 00mg","","Jam Monster Liquids Grape 06mg","Jam Monster Liquids Grape 03mg","River Reserve 60mL  Old Wolf 06mg","River Reserve 60mL  Old Wolf 12mg","Jam Monster Liquids Blackberry 03mg","Jam Monster Liquids Mangerine Guava ICE 03mg","Jam Monster Liquids Melon Colada ICE 06mg","Jam Monster Liquids Blackberry 06mg","Jam Monster Liquids Mangerine Guava ICE 06mg","Jam Monster Liquids Melon Colada ICE 03mg","Skwezed 100ml E- Liquid Peach 06mg","River Reserve 60mL  Vanilla Waffle Cone 00mg","River Reserve 60mL  Vanilla Waffle Cone 03mg","River Reserve 60mL  Vanilla Waffle Cone 06mg","River Reserve 60mL  Vanilla Waffle Cone 12mg","Glas Basix 60ml Banana Cream Pie 03mg","Glas Basix 60ml Sugar Cookie 03mg","Glas Basix 60ml Sugar Cookie 06mg","Juice Head 100ml Strawberry Kiwi 00mg","Juice Head 100ml Strawberry Kiwi 03mg","Juice Head 100ml Strawberry Kiwi 06mg","Juice Head 100ml Watermelon Lime 06mg","Juice Head 100ml Watermelon Lime 03mg","Juice Head 100ml Watermelon Lime 00mg","Juice Head 100ml Peach Pear 00mg","Juice Head 100ml Peach Pear 03mg","Juice Head 100ml Peach Pear 06mg","Jam Monster Liquids Raspberry 03mg","Jam Monster Liquids Raspberry 06mg","Jam Monster Liquids Strawmelon Apple ICE 03mg","Jam Monster Liquids Strawmelon Apple ICE 06mg","Shijin 100ml E-Liquid Tortoise Blood 03mg","Shijin 100ml E-Liquid Tortoise Blood 06mg","Shijin 100ml E-Liquid Dragon Cloud 03mg","Shijin 100ml E-Liquid Dragon Cloud 06mg","Shijin 100ml E-Liquid Tortoise on Ice 00mg","Shijin 100ml E-Liquid Tortoise on Ice 03mg","Shijin 100ml E-Liquid Tortoise on Ice 06mg","","Juice Head 100ml Blueberry Lemon 00mg","Juice Head 100ml Blueberry Lemon 03mg","Juice Head 100ml Blueberry Lemon 06mg","Shijin 100ml E-Liquid Tiger's Milk 03mg","Shijin 100ml E-Liquid Tiger's Milk 06mg","River Reserve 60mL  Clearwater Creek 00mg","River Reserve 60mL  Clearwater Creek 03mg","River Reserve 60mL  Clearwater Creek 06mg","Cloud Nurdz E-Juice100ml Watermelon Apple Iced 06mg","Cloud Nurdz E-Juice100ml Strawberry Lemon Iced 03mg","Cloud Nurdz E-Juice100ml Watermelon Apple Iced 03mg","Cloud Nurdz E-Juice100ml Peach Blue Razz 03mg","Cloud Nurdz E-Juice100ml Strawberry Lemon 03mg","Cloud Nurdz E-Juice100ml Watermelon Apple 03mg","Cloud Nurdz E-Juice100ml Strawberry Lemon 06mg","Jam Monster Liquids PB & Jam Monster Strawberry 06mg","River Reserve 60mL  Strawberry Bandit 03mg","River Reserve 60mL  Bold Tobacco 00mg","River Reserve 60mL  Natural Tobacco 00mg","River Reserve 60mL  Mild Tobacco 00mg","River Reserve 60mL  Smooth (Sweet) Tobacco 00mg","River Reserve 60mL  Mild Tobacco 03mg","River Reserve 60mL  Smooth (Sweet) Tobacco 03mg","River Reserve 60mL  Mild Tobacco 06mg","River Reserve 60mL  Smooth (Sweet) Tobacco 06mg","River Reserve 60mL  Mild Tobacco 12mg","River Reserve 60mL  Smooth (Sweet) Tobacco 12mg","River Reserve 60mL  Smooth (Sweet) Tobacco 18mg","River Reserve 60mL  Pineapple Grape Menthol 00mg","River Reserve 60mL  Watermelon Punch Menthol 00mg","River Reserve 60mL  Pineapple Grape Menthol 03mg","River Reserve 60mL  Watermelon Punch Menthol 03mg","River Reserve 60mL  Pineapple Grape Menthol 06mg","River Reserve 60mL  Watermelon Punch Menthol 06mg","River Reserve 60mL  Pineapple Grape Menthol 12mg","River Reserve 60mL  Watermelon Punch Menthol 12mg","River Reserve 60mL  Peach Mango Lemonade 00mg","River Reserve 60mL  Peach Mango Lemonade 03mg","River Reserve 60mL  Peach Mango Lemonade 06mg","River Reserve 60mL  Peach Mango Lemonade 12mg","Ripe Collection 60ml Blue Razzleberry Pomegranate 00mg","Juice Head 100ml Watermelon Lime Freeze 00mg","Juice Head 100ml Watermelon Lime Freeze 03mg","Juice Head 100ml Watermelon Lime Freeze 06mg","Juice Head 100ml Blueberry Lemon Freeze 00mg","Juice Head 100ml Blueberry Lemon Freeze 03mg","Juice Head 100ml Blueberry Lemon Freeze 06mg","Jam Monster Liquids PB & Jam Monster Grape 03mg","Jam Monster Liquids PB & Jam Monster Grape 06mg","Jam Monster Liquids Mixed Berry 03mg","Jam Monster Liquids Blueberry Raspberry Lemon 03mg","Jam Monster Liquids Mango Peach Guava 03mg","Jam Monster Liquids Strawberry Kiwi Pomegranate 03mg","Jam Monster Liquids Mixed Berry 06mg","Jam Monster Liquids Vanilla Custard 06mg","Jam Monster Liquids Blueberry Raspberry Lemon 06mg","Jam Monster Liquids Strawberry Kiwi Pomegranate 06mg","Coastal Clouds 60ml The Abyss 00mg","Coastal Clouds 60ml The Abyss 03mg","Coastal Clouds 60ml The Abyss 06mg","Coastal Clouds 60ml The Voyage 03mg","Coastal Clouds 60ml The Voyage 06mg","Coastal Clouds 60ml The Voyage 00mg","Coastal Clouds 60ml Iced Blood Orange Mango Snow Cone 06mg","Coastal Clouds 60ml Iced Blood Orange Mango Snow Cone 03mg","Coastal Clouds 60ml Iced Blood Orange Mango Snow Cone 00mg","Coastal Clouds 60ml Sugared Nectarine 06mg","Coastal Clouds 60ml Sugared Nectarine 03mg","Coastal Clouds 60ml Sugared Nectarine 00mg","Coastal Clouds 60ml Iced Passion Fuit Orange Guava 00mg","Coastal Clouds 60ml Iced Passion Fuit Orange Guava 03mg","Coastal Clouds 60ml Iced Passion Fuit Orange Guava 06mg","Coastal Clouds 60ml Blood Orange Mango Snow Cone 00mg","Coastal Clouds 60ml Blood Orange Mango Snow Cone 03mg","Coastal Clouds 60ml Blood Orange Mango Snow Cone 06mg","Coastal Clouds 60ml Blueberry Banana Muffin 06mg","Coastal Clouds 60ml Blueberry Banana Muffin 03mg","Coastal Clouds 60ml Blueberry Banana Muffin 00mg","Coastal Clouds 60ml Blueberry Limeade 06mg","Coastal Clouds 60ml Blueberry Limeade 03mg","Coastal Clouds 60ml Blueberry Limeade 00mg","Coastal Clouds 60ml Guava Punch 00mg","Coastal Clouds 60ml Guava Punch 03mg","Coastal Clouds 60ml Guava Punch 06mg","Juice Head 100ml Guava Peach 00mg","Juice Head 100ml Guava Peach 03mg","Juice Head 100ml Guava Peach 06mg"];

let products = []; 
const library = document.getElementById('lib');

var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function remove(terms){
	for(a = 0; a < csv.length; a++){
		for(b = 0 ; b < terms.length; b++){
			if(csv[a].includes(terms[b])){
				csv[a] = csv[a].replace(`${terms[b]}`, '');
				csv[a] = csv[a].replace(/\s\s+/g, ' ');
				csv[a] = csv[a].replace(regex, '');
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
}
console.log("Finished");