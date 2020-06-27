function $(que){
  return document.getElementById(que);
}
let freebaseLibrary = [
  {menuCard: 'aqua.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruit"], flavors: ["mist", "flow", "oasis", "pure"]},
  {menuCard: 'barista_brew.jpg', strength:["00mg", "03mg", "06mg"], profile: ["dessert", "coffee"], flavors: ["cinnamon glazed blueberry scone", "maple bar donut", "salted caramel macchiato"]},
  {menuCard: 'glas_basix.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruit", "menthol", "ice"], flavors: ["blueberry cake", "carribean punch", "banana creme pie", "fizzy lemonade"]},
  {menuCard: 'jam_monster.jpg', strength:["00mg", "03mg", "06mg"], profile: ["dessert", "toast"], flavors: ["blackberry", "blueberry", "raspberry"]},
  {menuCard: 'juice_head.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruit"], flavors: ["strawberry kiwi", "peach pear", "pineapple grapefruit", "watermelon lime", "blueberry lemon"]},
  {menuCard: 'kilo_sour_series.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruit", "sour"], flavors: ["blue raspberry", "green apple", "strawberry", "watermelon", "sours"]},
  {menuCard: 'loyalty.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruity", "menthol.", "ice"], flavors: ["melonade", "kiberry", "watamango", "pomnade", "berry cake"]},
  {menuCard: 'marina.jpg', strength:["00mg", "03mg", "06mg"], profile: ["desert", "cream"], flavors: ["kronuts", "strawberry milkshake", "blueberry", "fruity", "milkshake", "donut"]},
  {menuCard: 'met4.jpg', strength:["00mg", "03mg", "06mg"], profile: ["desert", "cream"], flavors: ["golden ticket", "chocolate milk", "strawberry","cream cake", "deep fried", "fairgrounds"]},
  {menuCard: 'naked.jpg', strength:["00mg", "03mg", "06mg", "12mg"], profile: ["fruity"], flavors: ["hawaiian pog", "lava flow", "melon kiwi", "maui sun", "really berry", "peachy peach"]},
  {menuCard: 'naked_cream.jpg', strength:["00mg", "03mg", "06mg", "12mg"], profile: ["cream"], flavors: ["mango", "azul berries", "banana", "strawberry", "unicorn"]},
  {menuCard: 'naked_menthol.jpg', strength:["00mg", "03mg", "06mg", "12mg"], profile: ["menthol", "ice"], flavors: ["very cool", "melon", "strawberry", "pomegranate", "hawaiian pog", "lava flow", "apple cooler"]},
  {menuCard: 'one_up_vapor.jpg', strength:["00mg", "03mg", "06mg", "12mg"], profile: ["fruity", "menthol", "ice"], flavors: ["tropical worm", "rainbow spectrum", "orgasm"]},
  {menuCard: 'pacific_northwest_one.jpg', strength:["00mg", "03mg", "06mg", "12mg", "18mg"], profile: ["fruity", "desert"], flavors: ["arctic frost", "tobacco", "blueberry muffin", "cherry limeade", "cinnamon crunch", "fruity o's"]},
  {menuCard: 'pacific_northwest_two.jpg', strength:["00mg", "03mg", "06mg", "12mg", "18mg"], profile: ["fruity", "desert"], flavors: ["mad batter", "nw4", "peach frost", "peaches", "spearmint", "vanilla nut latte"]},
  {menuCard: 'reds_apple.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruity", "menthol", "ice"], flavors: ["watermelon", "apple", "mango"]},
  {menuCard: 'ripe_collection.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruity"], flavors: ["fiji melon", "kiwi dragon berry", "blue razzleberry pomegranate", "peach mango pineapple"]},
  {menuCard: 'river_reserve_two.jpg', strength:["00mg", "03mg", "06mg", "12mg", "18mg"], profile: ["fruity", "desert", "menthol", "ice"], flavors: ["pbg", "raspberry crumble", "strawberry", "cream", "waffle cone", "strawnana", "swamp mama", "tiger's blood", "vanilla bandit", "vanilla graham", "wiki", "watermelon punch", "pineapple grape", "peach mango lemonade"]},
  {menuCard: 'river_reserve_one.jpg', strength:["00mg", "03mg", "06mg", "12mg", "18mg"], profile: ["fruity", "desert", "menthol", "ice"], flavors: ["acid", "worm", "bandit", "blackberry", "waffle cone", "blue island punch", "caramel cove", "castaway", "blueberry", "eddy", "great wall", "island", "lemon drifter", "midori sour", "northwest", "old wolf"]},
  {menuCard: 'ruthless_one.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruity", "menthol", "ice"], flavors: ["strizzy", "slurricane", "tropic thunda", "swamp thang", "paradize", "rage"]},
  {menuCard: 'ruthless_two.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruity", "menthol", "ice"], flavors: ["jungle fever", "ez duz it", "grape drank", "antidote", "skir skirr"]},
  {menuCard: 'shijin.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruity", "desert"], flavors: ["dragon cloud", "phoenix tears", "tortoise on", "ice", "rocks", "tiger's milk"]},
  {menuCard: 'silverback.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruity", "menthol", "ice"], flavors: ["booboo", "jenny", "lola", "sandy"]},
  {menuCard: 'transistor.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruity"], flavors: ["lem'n berry", "lsd", "lemon sour drop", "tango melon", "nazzo"]},
  {menuCard: 'air_factory.jpg', strength:["00mg", "03mg", "06mg"], profile: ["fruity"], flavors: ["mystery", "blue razz", "blue raspberry", "berry rush", "wild apple", "melon lush", "kookie krunch"]},
  {menuCard: 'vapetasia.jpg', strength:["00mg", "03mg", "06mg"], profile: ["cream"], flavors: ["killer kustard", "strawberry"]},
];
freebaseLibrary.sort(function(a, b){
    var letterA = a.menuCard.toLowerCase(), letterB = b.menuCard.toLowerCase()
    if (letterA < letterB) //ascending
        return -1 
    if (letterA > letterB)
        return 1
    return 0
})
let fourOhFour = [{menuCard: '404.jpg'}]

drawLibrary(freebaseLibrary);

const searchBar = $("freebaseSearch");
searchBar.addEventListener("keyup", e => {
  const searchString = e.target.value.toLowerCase();
  $('freebaseContainer').innerHTML = "";

  const found = freebaseLibrary.filter(flavorCard => {
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
      $('freebaseContainer').innerHTML += `<div class = "col"><div class = "row"><img src = resources/freebase_images/${imageSrc.menuCard} class = padding></div>`;
  });
}

