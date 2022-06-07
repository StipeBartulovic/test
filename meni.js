function otvoriMeni(){

    if(window.innerWidth > 700){
        document.getElementById("navCont").style.width = '15%';
        document.getElementById("navCont").style.marginRight = '-5%';
    }else{
        document.getElementById("navCont").style.width = '50%';
        document.getElementById("navCont").style.marginRight = '-5%';
    }
    document.getElementById("strelica").style.left = '-5%';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    document.getElementById("nevidljivo").style.visibility = 'visible';
}

function zatvoriMeni(){
    document.getElementById("navCont").style.width = '0%';
    document.getElementById("navCont").style.marginRight = '0';
    document.getElementById("strelica").style.left = '2%';
    document.getElementById("Cont").style.width = '100%';
    document.getElementById("nevidljivo").style.visibility = 'hidden';
}
