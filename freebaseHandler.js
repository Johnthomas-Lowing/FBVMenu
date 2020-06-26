function $(que){
  return document.getElementById(que);
}
let freebaseLibrary = [
  {menuCard: 'aqua.jpg', profile: ["fruit"], flavors: ["mist", "flow", "oasis", "pure"]},
  {menuCard: 'barista_brew.jpg', profile: ["dessert", "coffee"], flavors: ['cinnamon', "glazed", "blueberry", "scone", "maple", "bar", "donut", "salted", "caramel", "macchiato"]},
  {menuCard: 'glas_basix.jpg', profile: ["fruit", "menthol"], flavors: ["blueberry", "cake", "carribean", "punch", "banana", "creme", "pie", "fizzy", "lemonade"]},
  {menuCard: 'jam_monster.jpg', profile: ["dessert", "toast"], flavors: ["blackberry", "blueberry", "raspberry"]},
  {menuCard: 'juice_head.jpg', profile: ["fruit"], flavors: ["strawberry", "kiwi", "peach", "pear", "pineapple", "grapefruit", "watermelon", "lime", "blueberry", "lemon"]},
  {menuCard: 'kilo_sour_series.jpg', profile: ["fruit", "sour"], flavors: ["blue", "raspberry", "green", "apple", "strawberry", "watermelon", "sours"]},
  {menuCard: 'loyalty.jpg', profile: ["fruity", "menthol."], flavors: ["melonade", "kiberry", "watamango", "pomnade", "berry", "cake"]},
  {menuCard: 'marina.jpg', profile: ["desert", "cream"], flavors: ["kronuts", "strawberry", "blueberry", "fruity", "milkshake", "donut"]},
  {menuCard: 'met4.jpg', profile: ["desert", "cream"], flavors: ["golden", "ticket", "chocolate", "milk", "strawberry","cake", "fried", "deep", "fairgrounds"]},
  {menuCard: 'naked.jpg', profile: ["fruity"], flavors: ["melon", "hawaiian", "pog", "lava", "flow", "melon", "kiwi", "maui", "sun", "really", "berry", "peach"]},
  {menuCard: 'naked_cream.jpg', profile: ["cream"], flavors: ["mango", "azul", "berries", "banana", "strawberry"]},
  {menuCard: 'naked_menthol.jpg', profile: ["menthol"], flavors: ["very", "cool", "melon", "strawberry", "pomegranate", "hawaiian", "pog", "lava", "flow", "apple", "cooler"]},
  {menuCard: 'one_up_vapor.jpg', profile: ["fruity", "menthol"], flavors: ["tropical", "worm", "rainbow", "spectrum", "orgasm"]},
  {menuCard: 'pacific_northwest_one.jpg', profile: ["fruity", "desert"], flavors: ["arctic", "frost", "tobacco", "blueberry","muffin", "cherry", "limeade", "cinnamon", "crunch", "fruity"]},
  {menuCard: 'pacific_northwest_two.jpg', profile: ["fruity", "desert"], flavors: ["mad", "batter", "nw4", "peach", "frost", "peaches", "spearmint", "vanilla", "nut", "latte"]},
  {menuCard: 'reds_apple.jpg', profile: ["fruity", "menthol"], flavors: ["watermelon", "apple", "mango"]},
  {menuCard: 'ripe_collection.jpg', profile: ["fruity"], flavors: ["fiji", "melon", "kiwi", "dragon", "berry", "blue", "razzleberry", "pomegranate", "peach", "mango", "pineapple"]},
  {menuCard: 'river_reserve_two.jpg', profile: ["fruity", "desert", "menthol"], flavors: ["pbg", "raspberry crumble", "strawberry", "cream", "waffle", "cone", "strawnana", "swamp", "mama", "tiger", "tiger's", "blood", "vanilla", "bandit", "graham", "wiki", "watermelon", "punch", "pineapple", "grape", "peach", "mango", "lemonade"]},
  {menuCard: 'river_reserve_one.jpg', profile: ["fruity", "desert", "menthol"], flavors: ["acid", "worm", "bandit", "blackberry", "waffle", "cone", "blue", "island", "punch", "caramel", "cove", "castaway", "blueberry", "eddy", "great", "wall", "island", "lemon", "midori", "sour", "northwest", "old", "wolf"]},
  {menuCard: 'ruthless_one.jpg', profile: ["fruity", "menthol"], flavors: ["strizzy", "slurricane", "tropic", "thunda", "swamp", "thang", "paradize", "rage"]},
  {menuCard: 'ruthless_two.jpg', profile: ["fruity", "menthol"], flavors: ["jungle", "fever", "ez", "duz", "it", "grape", "drank", "antidote", "skir", "skirr", "ice"]},
  {menuCard: 'shijin.jpg', profile: ["fruity", "desert"], flavors: ["dragon", "cloud", "phoenix", "tears", "tortoise", "ice", "rocks", "tiger", "tiger's", "milk"]},
  {menuCard: 'silverback.jpg', profile: ["fruity", "menthol"], flavors: ["booboo", "jenny", "lola", "sandy"]},
  {menuCard: 'transistor.jpg', profile: ["fruity"], flavors: ["lem'n", "berry", "lsd", "lemon", "sour", "drop", "tango", "melon", "nazzo"]},
  {menuCard: 'air_factory.jpg', profile: ["fruity"], flavors: ["mystery", "blue", "razz", "raspberry", "berry", "rush", "wild", "apple", "melon", "lush", "kookie", "krunch"]},
  {menuCard: 'vapetasia.jpg', profile: ["cream"], flavors: ["killer", "kustard", "strawberry"]},
];
drawLibrary(freebaseLibrary);
//search returns page for partial name search but not flavor
//suspect it's because menuCard is a string while the flavors are stored in an array
const searchBar = $("freebaseSearch");
searchBar.addEventListener("keyup", e => {
  const searchString = e.target.value.toLowerCase();
  $('freebaseContainer').innerHTML = "";

  const found = freebaseLibrary.filter(flavorCard => {
    return (
      flavorCard.menuCard.includes(searchString) ||
      flavorCard.flavors.includes(searchString) ||
      flavorCard.profile.includes(searchString)
    );
  });
  drawLibrary(found);
});

function drawLibrary(q){
  q.forEach(imageSrc => {
      $('freebaseContainer').innerHTML += `<div class = "col"><div class = "row"><img src = resources/freebase_images/${imageSrc.menuCard} class = padding></div>`;
  });
}

