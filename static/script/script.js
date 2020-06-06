// About me section

var aboutbtn = document.querySelector('#aboutBtn');

aboutbtn.addEventListener('click', function(){
    var about = document.querySelector('#about'),
		main = document.querySelector("main");
	

    if (about.classList == "dropDown") {
        about.classList.remove("dropDown");
		aboutbtn.classList.add("white");
		main.classList.add("hidden");
        
    } else {
	   	about.classList.add("dropDown");
		aboutbtn.classList.remove("white");
		main.classList.remove("hidden");
    }
});