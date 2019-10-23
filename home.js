let isToggleOpen =false;

const nav = document.querySelector(".nav");

showMenu = ()=>{
    if (isToggleOpen===false) {
        nav.style.display="inline"
        isToggleOpen =true;
    }
    else{
        nav.style.display="none"
        isToggleOpen =false;
    }
}