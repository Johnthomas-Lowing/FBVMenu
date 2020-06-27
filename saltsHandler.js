let saltLibrary = [
  {menuCard: 'glas_basix_salts.jpg', strength:["30mg", "50mg"], profile: ["fruit", "menthol", "dessert"], flavors: ["juicy apple", "mango tango", "cool melon", "fizzy lemonade", "banana cream pie", "blue magic", "crunch berry"]},
  {menuCard: 'juice_head_salts.jpg', strength:["25mg", "50mg"], profile: ["fruit"], flavors: ["strawberry kiwi", "peach pear", "pineapple grapefruit", "watermelon lime", "blueberry lemon"]},
  {menuCard: 'salt_factory.jpg', strength:["35mg", "50mg"], profile: ["fruit"], flavors: ["blue razz", "mystery", "mint", "melon lush"]},
  {menuCard: 'met4_salts.jpg', strength:["24mg", "48mg"], profile: ["dessert"], flavors: ["golden ticket", "strawberry milk", "fairgrounds", "deep fried cream cake"]},
  {menuCard: 'naked_salts.jpg', strength:["35mg", "50mg"], profile: ["fruit", "menthol", "tobacco"], flavors: ["hawaiian pog", "lava flow", "really berry", "melon kiwi", "strawberry pom", "melon", "berry", "polar breze", "brain freeze", "very cool", "american patriot", "mint"]},
  {menuCard: 'reds_salts.jpg', strength:["30mg", "50mg"], profile: ["fruit", "menthol"], flavors: ["apple", "watermelon", "mango", "grape", "berries", "guava"]},
  {menuCard: 'river_reserve_salts.jpg', strength:["25mg", "40mg"], profile: ["fruit", "cream", "dessert", "menthol"], flavors: ["blue island punch", "lemon drifter", "royal tobacco", "summer berry", "tangle", "vanilla waffle cone", "winter berry"]},
  {menuCard: 'shijin_salts.jpg', strength:["50mg"], profile: ["fruit", "dessert"], flavors: ["dragon", "phoenix", "tortoise", "tiger"]},
  {menuCard: 'svrf_salts.jpg', strength:["24mg", "48mg"], profile: ["fruit", "cream"], flavors: ["raspberry dragon fruit iced tea", "papaya mango cataloupe", "coconut and cream"]},
];
saltLibrary.sort(function(a, b){
    var letterA = a.menuCard.toLowerCase(), letterB = b.menuCard.toLowerCase()
    if (letterA < letterB) //ascending
        return -1 
    if (letterA > letterB)
        return 1
    return 0
})
let fourOhFour = [{menuCard: '404.jpg'}]

drawLibrary(saltLibrary);

const searchBar = $("saltSearch");
searchBar.addEventListener("keyup", e => {
  const searchString = e.target.value.toLowerCase();
  $('saltContainer').innerHTML = "";

  const found = saltLibrary.filter(flavorCard => {
    return (
      flavorCard.menuCard.includes(searchString) ||
      flavorCard.flavors.filter(flavor => flavor.includes(searchString)).length > 0 ||
      flavorCard.strength.filter(strength => strength.includes(searchString)).length > 0 ||
      flavorCard.profile.filter(profile => profile.includes(searchString)).length > 0
    );
  });
  if(found.length > 0){
      drawLibrary(found);
  } else {
    drawLibrary(fourOhFour);
  }
});

function drawLibrary(q){
  q.forEach(imageSrc => {
      $('saltContainer').innerHTML += `<div class = "col"><div class = "row"><img src = resources/salt_images/${imageSrc.menuCard} class = padding></div>`;
  });
}

function $(query){
	return document.getElementById(query);
}