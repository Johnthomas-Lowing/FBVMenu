let nicSaltLibrary = [
  'salt_factory.jpg',
  'glas_basix_salts.jpg',
  'juice_head_salts.jpg',
  'met4_salts.jpg',
  'naked_salts.jpg',
  'reds_salts.jpg',
  'river_reserve_salts.jpg',
  'shijin_salts.jpg',
  'svrf_salts.jpg',
];
nicSaltLibrary.sort();
nicSaltLibrary.forEach(imageSrc => {
  $('nicSaltContainer').innerHTML += `<div class = "col"><div class = "row"><img src = resources/salts_images/${imageSrc} class = padding></div>`;
});

function $(query){
	return document.getElementById(query);
}