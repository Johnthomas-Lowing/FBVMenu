let dummy = [];
let shelf = [];
let container = document.getElementById('container');
let size = /.\d\d[mM][lL]/;
let nonAlpha = /[^a-zA-Z0-9]/g;
let symbols = /[']/g;

function generateLibraryFromCSV(){
    for(z = 0; z < csvs.length; z++){
        container.innerHTML += `let ${storeList[z]} = [ <br>`
        for(a = 29; a < csvs[z].length; a+=29){
            dummy.push(`${csvs[z][a+6].replace(size, '').replace(nonAlpha, '').toLowerCase()}:${csvs[z][a+10].replace(size, '').replace(symbols, '')}:${csvs[z][a+8]}`);
        }
        for(a = 0; a < dummy.length; a++){
            if(shelf.includes(dummy[a]) != true){
                shelf.push(dummy[a].split(':'));
            }
        }
        shelf.forEach(x => {
            if(x[3].includes('Standard')){
                container.innerHTML+=`{brand: '${x[0]}', product: '${x[1]}', blurb: ` + "`${blurbs[" + `"${x[0]}"]["${x[1].replace(nonAlpha, '').toLowerCase()}"]}` + "`}, <br>";
            }
        });
        container.innerHTML += "<br> ] , [ <br> ";
        shelf.forEach(x => {
            if(x[3].includes('Salt')){
                container.innerHTML+=`{brand: '${x[0]}', product: '${x[1]}', blurb: ` + "`${blurbs[" + `"${x[0]}"]["${x[1].replace(nonAlpha, '').toLowerCase()}"]}` + "`}, <br>";
            }
        })
        shelf = [];
        dummy = [];
    }
    container.innerHTML += "]<br> ];";
}
generateLibraryFromCSV();
