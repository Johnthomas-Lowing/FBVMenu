function changeText(id){
	var x = document.getElementById("textTest");
	if(id == "saltNicButton"){
		x.innerHTML = "You've selected the salt nic menu.";
	} else if (id == "freebaseButton"){
		x.innerHTML = "You've selected the freebase menu."
	}
}
