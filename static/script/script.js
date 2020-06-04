// About me section

var aboutbtn = document.querySelector('#aboutBtn');

aboutbtn.addEventListener('click', function(){
    var about = document.querySelector('#about');
	

    if (about.classList == "dropDown") {
        about.classList.remove("dropDown");
        
    } else {
           about.classList.add("dropDown");
    }
});