// About me section

var aboutbtn = document.querySelector('#aboutBtn');

aboutbtn.addEventListener('click', function(){
    var about = document.querySelector('#about');
	

    if (about.classList == "dropDown") {
        about.classList.remove("dropDown");
		aboutbtn.classList.add("white");
        
    } else {
	   	about.classList.add("dropDown");
		aboutbtn.classList.remove("white");
    }
});