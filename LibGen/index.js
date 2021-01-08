let forbidden = ["00mg", "0mg", "03mg", "3mg", "06mg", "6mg", "12mg", "18mg", "15ml", "30ml", "60ml", "60mL", "100ml", "120ml", "**",
	"eliquid", "e-liquid", "e-Liquid", "E-Liquid", "E-liquid", "e-Liquid", "Liquids",
	"ejuice", "eJuice", "EJuice", "e-juice", "e-Juice", "E-juice", "E-Juice"];
let producers = [
	'River Reserve',
	'PNW',
	'Jam Monster',
	'Air Factory',
	'Aqua',
	'Cloud Nurdz',
	'Glas Basix',
	'Marina Vape',
	'Ripe Collection',
	'Sadboy',
	'Shijin',
	'The Hype Collection',
	'Transistor',
	"USA Vape Lab",
	'Skwezed',
];
let csv = ["Ruthless 120mL Ez Duz It On Ice 06mg","PNW E-Liquid 30ml Arctic Tobacco 00mg","PNW E-Liquid 30ml Arctic Tobacco 03mg","PNW E-Liquid 30ml Arctic Tobacco 06mg","PNW E-Liquid 30ml Arctic Tobacco 12mg","PNW E-Liquid 30ml Arctic Tobacco 18mg","PNW E-Liquid 30ml Fruity O's 00mg","PNW E-Liquid 30ml Mad Batter 00mg","PNW E-Liquid 30ml NW4 00mg","PNW E-Liquid 30ml Fruity O's 03mg","PNW E-Liquid 30ml Mad Batter 03mg","PNW E-Liquid 30ml NW4 03mg","PNW E-Liquid 30ml Fruity O's 06mg","PNW E-Liquid 30ml Mad Batter 06mg","PNW E-Liquid 30ml NW4 06mg","PNW E-Liquid 30ml Fruity O's 12mg","PNW E-Liquid 30ml Mad Batter 12mg","PNW E-Liquid 30ml NW4 12mg","PNW E-Liquid 30ml Fruity O's 18mg","PNW E-Liquid 30ml Mad Batter 18mg","PNW E-Liquid 30ml NW4 18mg","PNW E-Liquid 30ml Peach Frost 00mg","PNW E-Liquid 30ml Peaches 00mg","PNW E-Liquid 30ml Vanilla Nut Latte 00mg","PNW E-Liquid 30ml Cinnamon Crunch 00mg","PNW E-Liquid 30ml Peach Frost 03mg","PNW E-Liquid 30ml Peaches 03mg","PNW E-Liquid 30ml Vanilla Nut Latte 03mg","PNW E-Liquid 30ml Cinnamon Crunch 03mg","PNW E-Liquid 30ml Peach Frost 06mg","PNW E-Liquid 30ml Peach Frost 12mg","PNW E-Liquid 30ml Peach Frost 18mg","PNW E-Liquid 30ml Peaches 06mg","PNW E-Liquid 30ml Peaches 12mg","PNW E-Liquid 30ml Peaches 18mg","PNW E-Liquid 30ml Vanilla Nut Latte 06mg","PNW E-Liquid 30ml Vanilla Nut Latte 12mg","PNW E-Liquid 30ml Vanilla Nut Latte 18mg","PNW E-Liquid 30ml Cinnamon Crunch 06mg","PNW E-Liquid 30ml Cinnamon Crunch 12mg","PNW E-Liquid 30ml Cinnamon Crunch 18mg","PNW E-Liquid 30ml Blueberry Muffin 00mg","PNW E-Liquid 30ml Cherry Limeade 00mg","PNW E-Liquid 30ml Blueberry Muffin 03mg","PNW E-Liquid 30ml Cherry Limeade 03mg","PNW E-Liquid 30ml Blueberry Muffin 06mg","PNW E-Liquid 30ml Cherry Limeade 06mg","PNW E-Liquid 30ml Blueberry Muffin 12mg","PNW E-Liquid 30ml Cherry Limeade 12mg","PNW E-Liquid 30ml Blueberry Muffin 18mg","PNW E-Liquid 30ml Cherry Limeade 18mg","River Reserve 60mL  Northwest 00mg","River Reserve 60mL  Northwest 03mg","River Reserve 60mL  Northwest 12mg","River Reserve 60mL  Great Wall 06mg","River Reserve 60mL  Great Wall 00mg","River Reserve 60mL  Tiger's Blood 03mg","River Reserve 60mL  Northwest 06mg","River Reserve 60mL  Great Wall 12mg","River Reserve 60mL  Great Wall 03mg","River Reserve 60mL  Tiger's Blood 00mg","River Reserve 60mL  Tiger's Blood 06mg","River Reserve 60mL  Tiger's Blood 12mg","River Reserve 60mL  Wiki 00mg","River Reserve 60mL  Wiki 03mg","River Reserve 60mL  Wiki 06mg","River Reserve 60mL  Wiki 12mg","River Reserve 60mL  Eddy 00mg","River Reserve 60mL  Eddy 03mg","River Reserve 60mL  Eddy 12mg","River Reserve 60mL  Eddy 06mg","River Reserve 60mL  Caramel Cove 06mg","River Reserve 60mL  Swamp Mama 06mg","River Reserve 60mL  Caramel Cove 12mg","River Reserve 60mL  Swamp Mama 12mg","River Reserve 60mL  Swamp Mama 18mg","River Reserve 60mL  PBG 12mg","River Reserve 60mL  Caramel Cove 03mg","River Reserve 60mL  Swamp Mama 03mg","River Reserve 60mL  Swamp Mama 00mg","River Reserve 60mL  PBG 00mg","River Reserve 60mL  PBG 03mg","River Reserve 60mL  PBG 06mg","River Reserve 60mL  Caramel Cove 00mg","River Reserve 60mL  River Colada 00mg","River Reserve 60mL  River Colada 03mg","River Reserve 60mL  River Colada 06mg","River Reserve 60mL  River Colada 12mg","River Reserve 60mL  Drifter 12mg","River Reserve 60mL  Drifter 06mg","River Reserve 60mL  Drifter 03mg","River Reserve 60mL  Drifter 00mg","River Reserve 60mL  Midori Sour 00mg","River Reserve 60mL  Drifter X 00mg","River Reserve 60mL  Drifter X 03mg","River Reserve 60mL  Drifter X 06mg","River Reserve 60mL  Drifter X 12mg","River Reserve 60mL  Lemon Drifter 00mg","River Reserve 60mL  Bandit 00mg","River Reserve 60mL  Strawberry Drifter 00mg","River Reserve 60mL  Lemon Drifter 03mg","River Reserve 60mL  Bandit 03mg","River Reserve 60mL  Strawberry Drifter 03mg","River Reserve 60mL  Blackberry Waffle Cone 00mg","River Reserve 60mL  Strawberry Waffle Cone 00mg","River Reserve 60mL  Blackberry Waffle Cone 03mg","River Reserve 60mL  Strawberry Waffle Cone 03mg","River Reserve 60mL  Blackberry Waffle Cone 06mg","River Reserve 60mL  Strawberry Waffle Cone 06mg","River Reserve 60mL  Lemon Drifter 06mg","River Reserve 60mL  Bandit 06mg","River Reserve 60mL  Strawberry Drifter 06mg","River Reserve 60mL  Lemon Drifter 12mg","River Reserve 60mL  Bandit 12mg","River Reserve 60mL  Strawberry Drifter 12mg","River Reserve 60mL  Blackberry Waffle Cone 12mg","River Reserve 60mL  Strawberry Waffle Cone 12mg","River Reserve 60mL  Blue Island Punch 00mg","River Reserve 60mL  Blue Island Punch 03mg","River Reserve 60mL  Blue Island Punch 06mg","River Reserve 60mL  Blue Island Punch 12mg","PNW E-Liquid 30ml Arctic Frost 00mg","PNW E-Liquid 30ml Spearmint 00mg","PNW E-Liquid 30ml Spearmint 03mg","PNW E-Liquid 30ml Arctic Frost 03mg","PNW E-Liquid 30ml Arctic Frost 06mg","PNW E-Liquid 30ml Spearmint 06mg","PNW E-Liquid 30ml Arctic Frost 12mg","PNW E-Liquid 30ml Spearmint 12mg","PNW E-Liquid 30ml Arctic Frost 18mg","PNW E-Liquid 30ml Spearmint 18mg","River Reserve 60mL  Sweet Cream Butterscotch 00mg","River Reserve 60mL  Sweet Cream Butterscotch 03mg","River Reserve 60mL  Sweet Cream Butterscotch 06mg","River Reserve 60mL  Sweet Cream Butterscotch 12mg","River Reserve 60mL  Strawnana Drifter 00mg","River Reserve 60mL  Strawnana Drifter 03mg","River Reserve 60mL  Strawnana Drifter 06mg","River Reserve 60mL  Strawnana Drifter 12mg","River Reserve 60mL  Vanilla Graham 00mg","River Reserve 60mL  Vanilla Graham 03mg","River Reserve 60mL  Vanilla Graham 06mg","Aqua 60ml Pure 03mg","Aqua 60ml Pure 06mg","Aqua 60ml Flow 03mg","Aqua 60ml Flow 06mg","Aqua 60ml Oasis 00mg","Aqua 60ml Oasis 03mg","Aqua 60ml Oasis 06mg","Jam Monster Liquids Strawberry 03mg","Jam Monster Liquids Strawberry 06mg","Jam Monster Liquids Blueberry 03mg","Jam Monster Liquids Blueberry 06mg","River Reserve 60mL  Vanilla Bandit 00mg","River Reserve 60mL  Vanilla Bandit 03mg","River Reserve 60mL  Vanilla Bandit 06mg","River Reserve 60mL  Vanilla Bandit 12mg","Skwezed 100ml E- Liquid Green Apple 03mg","Skwezed 100ml E- Liquid Green Apple 06mg","Skwezed 100ml E- Liquid Grapefruit 06mg","Skwezed 100ml E- Liquid Grapefruit 03mg","Skwezed 100ml E- Liquid Grapefruit 00mg","Alternativ 100ML** Alpha 00mg","Jam Monster Liquids Grape 06mg","Jam Monster Liquids Grape 03mg","River Reserve 60mL  Old Wolf 06mg","River Reserve 60mL  Old Wolf 12mg","Jam Monster Liquids Blackberry 03mg","Jam Monster Liquids Mangerine Guava ICE 03mg","Jam Monster Liquids Melon Colada ICE 06mg","Jam Monster Liquids Blackberry 06mg","Jam Monster Liquids Mangerine Guava ICE 06mg","Jam Monster Liquids Melon Colada ICE 03mg","Skwezed 100ml E- Liquid Peach 06mg","River Reserve 60mL  Vanilla Waffle Cone 00mg","River Reserve 60mL  Vanilla Waffle Cone 03mg","River Reserve 60mL  Vanilla Waffle Cone 06mg","Glas Basix 60ml Banana Cream Pie 03mg","Glas Basix 60ml Banana Cream Pie 06mg","Glas Basix 60ml Sugar Cookie 03mg","Glas Basix 60ml Sugar Cookie 06mg","Jam Monster Liquids Raspberry 03mg","Jam Monster Liquids Raspberry 06mg","Jam Monster Liquids Strawmelon Apple ICE 03mg","Jam Monster Liquids Strawmelon Apple ICE 06mg","Shijin 100ml E-Liquid Tortoise Blood 06mg","Shijin 100ml E-Liquid Dragon Cloud 03mg","Shijin 100ml E-Liquid Dragon Cloud 06mg","Shijin 100ml E-Liquid Tortoise on Ice 00mg","Shijin 100ml E-Liquid Tortoise on Ice 03mg","Shijin 100ml E-Liquid Tortoise on Ice 06mg","Aqua Candy 60ml** Rush (Blue Raspberry) 06mg","Shijin 100ml E-Liquid Tiger's Milk 06mg","River Reserve 60mL  Clearwater Creek 00mg","River Reserve 60mL  Clearwater Creek 03mg","River Reserve 60mL  Clearwater Creek 06mg","Cloud Nurdz E-Juice100ml Watermelon Apple Iced 06mg","Cloud Nurdz E-Juice100ml Strawberry Lemon Iced 03mg","Cloud Nurdz E-Juice100ml Watermelon Apple Iced 03mg","Cloud Nurdz E-Juice100ml Peach Blue Razz 03mg","Cloud Nurdz E-Juice100ml Strawberry Lemon 03mg","Cloud Nurdz E-Juice100ml Watermelon Apple 03mg","Cloud Nurdz E-Juice100ml Strawberry Lemon 06mg","Cloud Nurdz E-Juice100ml Watermelon Apple 06mg","Jam Monster Liquids PB & Jam Monster Strawberry 03mg","Jam Monster Liquids PB & Jam Monster Strawberry 06mg","River Reserve 60mL  Strawberry Bandit 03mg","River Reserve 60mL  Bold Tobacco 00mg","River Reserve 60mL  Natural Tobacco 00mg","River Reserve 60mL  Mild Tobacco 00mg","River Reserve 60mL  Smooth (Sweet) Tobacco 00mg","River Reserve 60mL  Bold Tobacco 03mg","River Reserve 60mL  Mild Tobacco 03mg","River Reserve 60mL  Smooth (Sweet) Tobacco 03mg","River Reserve 60mL  Mild Tobacco 06mg","River Reserve 60mL  Smooth (Sweet) Tobacco 06mg","River Reserve 60mL  Mild Tobacco 12mg","River Reserve 60mL  Smooth (Sweet) Tobacco 12mg","River Reserve 60mL  Smooth (Sweet) Tobacco 18mg","River Reserve 60mL  Pineapple Grape Menthol 00mg","River Reserve 60mL  Watermelon Punch Menthol 00mg","River Reserve 60mL  Pineapple Grape Menthol 03mg","River Reserve 60mL  Watermelon Punch Menthol 03mg","River Reserve 60mL  Pineapple Grape Menthol 06mg","River Reserve 60mL  Watermelon Punch Menthol 06mg","River Reserve 60mL  Watermelon Punch Menthol 12mg","River Reserve 60mL  Peach Mango Lemonade 00mg","River Reserve 60mL  Peach Mango Lemonade 03mg","River Reserve 60mL  Peach Mango Lemonade 06mg","River Reserve 60mL  Peach Mango Lemonade 12mg","Ripe Collection 60ml Blue Razzleberry Pomegranate 00mg","Jam Monster Liquids PB & Jam Monster Grape 03mg","Jam Monster Liquids PB & Jam Monster Grape 06mg","Jam Monster Liquids Mixed Berry 03mg","Jam Monster Liquids Vanilla Custard 03mg","Jam Monster Liquids Blueberry Raspberry Lemon 03mg","Jam Monster Liquids Mango Peach Guava 03mg","Jam Monster Liquids Strawberry Kiwi Pomegranate 03mg","Jam Monster Liquids Mixed Berry 06mg","Jam Monster Liquids Vanilla Custard 06mg","Jam Monster Liquids Blueberry Raspberry Lemon 06mg","Jam Monster Liquids Mango Peach Guava 06mg","Jam Monster Liquids Strawberry Kiwi Pomegranate 06mg"];
let products = []; 
const library = document.getElementById('lib');

function remove(terms){
	for(a = 0; a < csv.length; a++){
		for(b = 0 ; b < terms.length; b++){
			if(csv[a].includes(terms[b])){
				csv[a] = csv[a].replace(`${terms[b]}`, '');
				csv[a] = csv[a].replace(/\s\s+/g, ' ');
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

function generate(){
	for(a = 0; a < producers.length; a++){
		for(b = 0; b < products.length; b++){
			if(products[b].includes(producers[a])){
				let brand = producers[a].toLowerCase().split(" ").join("");
				products[b] = products[b].replace(`${producers[a]}`, '');
				products[b] = products[b].replace(/\s\s+/g, ' ');
				let shelfName = products[b].trim();
				let item = shelfName.toLowerCase().split(" ").join("");
				library.innerHTML += `{brand: "${brand}", shelfName: "${shelfName}", product: "${item}", blurb: "define me"}, <br>`;
			}
		}
		library.innerHTML += `{brand: "${producers[a].toLowerCase().split(" ").join("")}", shelfName: " ", product: "logo", blurb: " "}, <br>`;
	}
}

remove(forbidden);
consolidate();
console.log(products);
generate();