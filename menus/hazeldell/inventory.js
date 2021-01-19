let inventory = [
	

{brand: "riverreserve", shelfName: " ", product: "logo", blurb: " "},
{brand: "riverreserve", shelfName: "Bandit", product: "bandit", blurb: "Tobacco with blackberry custard."},
{brand: "riverreserve", shelfName: "Blackberry Waffle Cone", product: "blackberrywafflecone", blurb: "Blackberry topping on a scoop of vanilla ice cream, all atop a vanilla waffle cone."},
{brand: "riverreserve", shelfName: "Blue Island Punch", product: "blueislandpunch", blurb: "Blue raspberry fruit punch."},
{brand: "riverreserve", shelfName: "Bold Tobacco", product: "boldtobacco", blurb: " "},
{brand: "riverreserve", shelfName: "Caramel Cove", product: "caramelcove", blurb: "Caramel, hazelnut, and marshmallows."},
{brand: "riverreserve", shelfName: "Clearwater Creek", product: "clearwatercreek", blurb: "Nothin! Just VG, PG, and nicotine."},
{brand: "riverreserve", shelfName: "Drifter", product: "drifter", blurb: "Whipped cream with blueberries."},
{brand: "riverreserve", shelfName: "Drifter X", product: "drifterx", blurb: "Whipped cream with blackberries."},
{brand: "riverreserve", shelfName: "Eddy", product: "eddy", blurb: "Mango pomegranate lemonade."},
{brand: "riverreserve", shelfName: "Great Wall", product: "greatwall", blurb: "Graham crackers and caramel adorned with shaved almonds, Kentucky bourbon and a splash of coconut cream."},
{brand: "riverreserve", shelfName: "Lemon Drifter", product: "lemondrifter", blurb: "Whipped cream with tart lemon."},
{brand: "riverreserve", shelfName: "Midori Sour", product: "midorisour", blurb: "Honeydew, lemonlime, and cherry."},
{brand: "riverreserve", shelfName: "Mild Tobacco", product: "mildtobacco", blurb: " "},
{brand: "riverreserve", shelfName: "Natural Tobacco", product: "naturaltobacco", blurb: " "},
{brand: "riverreserve", shelfName: "Northwest", product: "northwest", blurb: "Vanilla, hazelnut, tobacco."},
{brand: "riverreserve", shelfName: "Old Wolf", product: "oldwolf", blurb: "Just like those little rootbeer barrel candies."},
{brand: "riverreserve", shelfName: "PBG", product: "pbg", blurb: "Peanut butter, banana, graham cracker."},
{brand: "riverreserve", shelfName: "Peach Mango Lemonade", product: "peachmangolemonade", blurb: " "},
{brand: "riverreserve", shelfName: "Pineapple Grape Menthol", product: "pineapplegrapementhol", blurb: " "},
{brand: "riverreserve", shelfName: "River Colada", product: "rivercolada", blurb: "Pineapple coconut rum."},
{brand: "riverreserve", shelfName: "Smooth Sweet Tobacco", product: "smoothsweettobacco", blurb: "Tobacco with a hint of vanilla cream."},
{brand: "riverreserve", shelfName: "Strawberry Bandit", product: "strawberrybandit", blurb: "Strawberry custard and tobacco."},
{brand: "riverreserve", shelfName: "Strawberry Drifter", product: "strawberrydrifter", blurb: "Whipped cream with strawberries."},
{brand: "riverreserve", shelfName: "Strawberry Waffle Cone", product: "strawberrywafflecone", blurb: "Strawberry topping on a scoop of vanilla ice cream, all atop a vanilla waffle cone."},
{brand: "riverreserve", shelfName: "Strawnana Drifter", product: "strawnanadrifter", blurb: "Whipped cream with strawberry and banana."},
{brand: "riverreserve", shelfName: "Swamp Mama", product: "swampmama", blurb: "Strawberries mixed with sweet vanilla custard."},
{brand: "riverreserve", shelfName: "Sweet Cream Butterscotch", product: "sweetcreambutterscotch", blurb: " "},
{brand: "riverreserve", shelfName: "Tigers Blood", product: "tigersblood", blurb: "Strawberry and coconut."},
{brand: "riverreserve", shelfName: "Vanilla Bandit", product: "vanillabandit", blurb: "Tobacco with vanilla custard."},
{brand: "riverreserve", shelfName: "Vanilla Graham", product: "vanillagraham", blurb: "Vanilla graham cracker with a brown sugar dusting."},
{brand: "riverreserve", shelfName: "Vanilla Waffle Cone", product: "vanillawafflecone", blurb: "A scoop of vanilla ice cream atop a vanilla waffle cone."},
{brand: "riverreserve", shelfName: "Watermelon Punch Menthol", product: "watermelonpunchmenthol", blurb: "Watermelon fruit punch with menthol."},
{brand: "riverreserve", shelfName: "Wiki", product: "wiki", blurb: "Watermelon and kiwi."}, 
{brand: "pnw", shelfName: "Arctic Frost", product: "arcticfrost", blurb: "define me"},
{brand: "pnw", shelfName: "Arctic Tobacco", product: "arctictobacco", blurb: "define me"},
{brand: "pnw", shelfName: "Blueberry Muffin", product: "blueberrymuffin", blurb: "define me"},
{brand: "pnw", shelfName: "Cherry Limeade", product: "cherrylimeade", blurb: "define me"},
{brand: "pnw", shelfName: "Cinnamon Crunch", product: "cinnamoncrunch", blurb: "define me"},
{brand: "pnw", shelfName: "Fruity O's", product: "fruityo's", blurb: "define me"},
{brand: "pnw", shelfName: "Mad Batter", product: "madbatter", blurb: "define me"},
{brand: "pnw", shelfName: "NW4", product: "nw4", blurb: "define me"},
{brand: "pnw", shelfName: "Peach Frost", product: "peachfrost", blurb: "define me"},
{brand: "pnw", shelfName: "Peaches", product: "peaches", blurb: "define me"},
{brand: "pnw", shelfName: "Spearmint", product: "spearmint", blurb: "define me"},
{brand: "pnw", shelfName: "Vanilla Nut Latte", product: "vanillanutlatte", blurb: "define me"},
{brand: "pnw", shelfName: " ", product: "logo", blurb: " "},
{brand: "jammonster", shelfName: "Blackberry", product: "blackberry", blurb: "define me"},
{brand: "jammonster", shelfName: "Blueberry", product: "blueberry", blurb: "define me"},
{brand: "jammonster", shelfName: "Blueberry Raspberry Lemon", product: "blueberryraspberrylemon", blurb: "define me"},
{brand: "jammonster", shelfName: "Grape", product: "grape", blurb: "define me"},
{brand: "jammonster", shelfName: "Mangerine Guava ICE", product: "mangerineguavaice", blurb: "define me"},
{brand: "jammonster", shelfName: "Mango Peach Guava", product: "mangopeachguava", blurb: "define me"},
{brand: "jammonster", shelfName: "Melon Colada ICE", product: "meloncoladaice", blurb: "define me"},
{brand: "jammonster", shelfName: "Mixed Berry", product: "mixedberry", blurb: "define me"},
{brand: "jammonster", shelfName: "PB & Jam Monster Grape", product: "pb&jammonstergrape", blurb: "define me"},
{brand: "jammonster", shelfName: "PB & Jam Monster Strawberry", product: "pb&jammonsterstrawberry", blurb: "define me"},
{brand: "jammonster", shelfName: "Raspberry", product: "raspberry", blurb: "define me"},
{brand: "jammonster", shelfName: "Strawberry", product: "strawberry", blurb: "define me"},
{brand: "jammonster", shelfName: "Strawberry Kiwi Pomegranate", product: "strawberrykiwipomegranate", blurb: "define me"},
{brand: "jammonster", shelfName: "Strawmelon Apple ICE", product: "strawmelonappleice", blurb: "define me"},
{brand: "jammonster", shelfName: "Vanilla Custard", product: "vanillacustard", blurb: "define me"},
{brand: "jammonster", shelfName: " ", product: "logo", blurb: " "},
{brand: "aqua", shelfName: "Candy Rush (Blue Raspberry)", product: "candyrush(blueraspberry)", blurb: "define me"},
{brand: "aqua", shelfName: "Flow", product: "flow", blurb: "define me"},
{brand: "aqua", shelfName: "Oasis", product: "oasis", blurb: "define me"},
{brand: "aqua", shelfName: "Pure", product: "pure", blurb: "define me"},
{brand: "aqua", shelfName: " ", product: "logo", blurb: " "},
{brand: "cloudnurdz", shelfName: "Peach Blue Razz", product: "peachbluerazz", blurb: "define me"},
{brand: "cloudnurdz", shelfName: "Strawberry Lemon", product: "strawberrylemon", blurb: "define me"},
{brand: "cloudnurdz", shelfName: "Strawberry Lemon Iced", product: "strawberrylemoniced", blurb: "define me"},
{brand: "cloudnurdz", shelfName: "Watermelon Apple", product: "watermelonapple", blurb: "define me"},
{brand: "cloudnurdz", shelfName: "Watermelon Apple Iced", product: "watermelonappleiced", blurb: "define me"},
{brand: "cloudnurdz", shelfName: " ", product: "logo", blurb: " "},
{brand: "shijin", shelfName: "Dragon Cloud", product: "dragoncloud", blurb: "define me"},
{brand: "shijin", shelfName: "Tiger's Milk", product: "tiger'smilk", blurb: "define me"},
{brand: "shijin", shelfName: "Tortoise Blood", product: "tortoiseblood", blurb: "define me"},
{brand: "shijin", shelfName: "Tortoise on Ice", product: "tortoiseonice", blurb: "define me"},
{brand: "shijin", shelfName: " ", product: "logo", blurb: " "},
{brand: "skwezed", shelfName: "E- Liquid Grapefruit", product: "e-liquidgrapefruit", blurb: "define me"},
{brand: "skwezed", shelfName: "E- Liquid Green Apple", product: "e-liquidgreenapple", blurb: "define me"},
{brand: "skwezed", shelfName: "E- Liquid Peach", product: "e-liquidpeach", blurb: "define me"},
{brand: "skwezed", shelfName: " ", product: "logo", blurb: " "},


];

let saltInventory = [
	
];

let combInv = inventory.concat(saltInventory);
let logos = combInv.filter(a => {
	return(a.product.includes("logo"));
});
let productNum = (inventory.length + saltInventory.length) - logos.length;
let makers = [];
for(b = 0; b < combInv.length; b++){
	if(makers.includes(combInv[b].brand) != true){
		makers.push(combInv[b].brand);
	}
}
let host = document.getElementById("hosting");
if(host != null){
	host.innerHTML = `Hosting definitions for <span class="fatboysRed">${productNum}+</span> flavors across <span class="fatboysRed">${makers.length}</span> manufacturers. <br> Ver. 2.0.1`;
}
