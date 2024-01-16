function myDDfunc(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
    }
    var i ;
    for (let i = 0; i < dropdowns.length; i++) {
        var openDropdowns = dropdowns[i];
        if (openDropdowns.contains.classList("show")) {
            openDropdowns.classList.remove("show");
        }
    }
}