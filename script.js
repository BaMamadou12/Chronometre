// les variable dont on a besoin
var sp ,btn_start , btn_stop, t, ms, s, mn, h;

//fonction qui permet d'initialiser les variables quand la page se charge
window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s=0, mn=0,h=0;

}
//mettre en place le compteur

function update_chrono(){
    ms+=1;
    if (ms == 10) {
        ms=1;
        s+=1;
        
    }
    if (s == 60) {
        s=0;
        mn += 1;

        
    }
    if (mn == 60) {
       mn =0;
       h += 1; 
        
    }
    //Insertion des valeurs dans les spans
    //[0] permet de selectionner le premiers span
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn +'min';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';
}

// mettre en place la fonction du bouton start
function start(){
    t= setInterval(update_chrono,100);
    btn_start.disabled =  true;

}

//stopper le chornometre
function stop(){
    clearInterval(t);
    btn_start.disabled = false;
}


//initialier le chronometre
function reset(){
    t;
    clearInterval(t); //supprimer l'intervalle en cours
    ms = 0, s=0, mn=0,h=0;
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn +'min';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';
    btn_start.disabled = false
}