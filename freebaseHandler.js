let freebaseLibrary = [
  'alternativ.jpg',
  'aqua.jpg',
  'barista_brew.jpg',
  'fresh_pressed.jpg',
  'glas_basix.jpg',
  'jam_monster.jpg',
  'juice_head.jpg',
  'kilo_sour_series.jpg',
  'loyalty.jpg',
  'marina.jpg',
  'met4.jpg',
  'naked.jpg',
  'naked_cream.jpg',
  'naked_menthol.jpg',
  'one_up_vapor.jpg',
  'pacific_northwest_one.jpg',
  'pacific_northwest_two.jpg',
  'reds_apple.jpg',
  'ripe_collection.jpg',
  'river_reserve_two.jpg',
  'river_reserve_one.jpg',
  'ruthless_one.jpg',
  'ruthless_two.jpg',
  'shijin.jpg',
  'silverback.jpg',
  'transistor.jpg',
  'air_factory.jpg',
];
freebaseLibrary.sort();

freebaseLibrary.forEach(imageSrc => {
  $('freebaseContainer').innerHTML += `<div class = "col"><div class = "row"><img src = resources/freebase_images/${imageSrc} class = padding></div>`;
});

function $(query){
	return document.getElementById(query);
}