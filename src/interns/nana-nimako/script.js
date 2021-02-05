window.onscroll = function() {scrollFunc()};

function scrollFunc(){
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		document.getElementById("top_btn").style.display = "none";
	} else{
		document.getElementById("top_btn").style.display = "block";
	}
}

function moveToAbout(){
	window.scrollTo(0,2000);
}