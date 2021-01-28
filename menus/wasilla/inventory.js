let inventory = [
	





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
