$(document).ready(main);

var menuOculto = 1;
function main() {
    $('.menu_bar').click(function(){
        if(menuOculto == 1) {     /* comparando  */
            $('nav').animate ({
                left:'0'
            });
            menuOculto = 0; /* asignacion */
        }
        else{
            $('nav').animate({
                left: '100%'
            });
            menuOculto = 1;
        }
    });
    $('.subMenu').click(function(){
        $(this).children_hijo('.children_hijo').slideToggle();
    });
    /* hacer una prueba:  */
   /*  alert("Si esta accediendo"); */
}