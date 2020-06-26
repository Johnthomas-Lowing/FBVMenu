function $(que){
  return document.getElementById(que);
}
let freebaseLibrary = [
  {imageName: 'aqua.jpg', profile: ["fruit"]},
  {imageName: 'barista_brew.jpg', profile: ["dessert"]},
  {imageName: 'glas_basix.jpg', profile: ["fruit", "menthol"]},
  {imageName: 'jam_monster.jpg', profile: ["dessert"]},
  {imageName: 'juice_head.jpg', profile: ["fruit"]},
  {imageName: 'kilo_sour_series.jpg', profile: ["fruit"]},
  {imageName: 'loyalty.jpg', profile: ["fruity"]},
  {imageName: 'marina.jpg', profile: ["fruity"]},
  {imageName: 'met4.jpg', profile: ["fruity"]},
  {imageName: 'naked.jpg', profile: ["fruity"]},
  {imageName: 'naked_cream.jpg', profile: ["fruity"]},
  {imageName: 'naked_menthol.jpg', profile: ["fruity"]},
  {imageName: 'one_up_vapor.jpg', profile: ["fruity"]},
  {imageName: 'pacific_northwest_one.jpg', profile: ["fruity"]},
  {imageName: 'pacific_northwest_two.jpg', profile: ["fruity"]},
  {imageName: 'reds_apple.jpg', profile: ["fruity"]},
  {imageName: 'ripe_collection.jpg', profile: ["fruity"]},
  {imageName: 'river_reserve_two.jpg', profile: ["fruity"]},
  {imageName: 'river_reserve_one.jpg', profile: ["fruity"]},
  {imageName: 'ruthless_one.jpg', profile: ["fruity"]},
  {imageName: 'ruthless_two.jpg', profile: ["fruity"]},
  {imageName: 'shijin.jpg', profile: ["fruity"]},
  {imageName: 'silverback.jpg', profile: ["fruity"]},
  {imageName: 'transistor.jpg', profile: ["fruity"]},
  {imageName: 'air_factory.jpg', profile: ["fruity"]},
  {imageName: 'vapetasia.jpg', profile: ["fruity"]},
];
drawLibrary(freebaseLibrary);

const searchBar = $("freebaseSearch");
searchBar.addEventListener("keyup", e => {
  const searchString = e.target.value.toLowerCase();
  $('freebaseContainer').innerHTML = "";

  const found = freebaseLibrary.filter(flavor => {
    return (
      flavor.imageName.includes(searchString) ||
      flavor.profile.includes(searchString)
    );
  });
  drawLibrary(found);
});

function drawLibrary(q){
  q.forEach(imageSrc => {
      $('freebaseContainer').innerHTML += `<div class = "col"><div class = "row"><img src = resources/freebase_images/${imageSrc.imageName} class = padding></div>`;
  });
}

