/*CARD WIDTH MANAGE */
let h = window.innerHeight/1.6;





/*CARD HEIGHT MANAGE END*/





function switchTab(tabCnt,tabBtn) {
				
var x = document.getElementsByClassName("tabcontent");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; 
	}
	document.getElementById(tabCnt).style.display = 'block'; 


let btnId = document.getElementById(tabBtn).className;

let btnIdSplit = btnId.split(" ")[1];

var y = document.getElementsByName("bottomNavBtn");

y[0].className = "fal fa-lamp-desk"
y[1].className = "fal fa-plus-square"
y[2].className = "fal fa-cheeseburger"


	var i;
	for (i = 0; i < y.length; i++) {
	y[i].style.color= "#000";
	}				

document.getElementById(tabBtn).className = "fa " + btnIdSplit;
document.getElementById(tabBtn).style.color= "#000";				
}



/*BACKGROUND COLOR START*/

let cardBgColor =['#00C5AC','#FDF3F8','#F65F34','#F7E2E1','#FCBD10','#F79990','#C6B9FF','#10A957','#1CBE59','#E6F8F3','#ED7855','#FC5F7E','#4D3BC3','#6CBBF3'];

/*BACKGROUND COLOR END*/




cardRand();

function cardRand(){



let cardDataRand = cardData[Math.floor(Math.random() * cardData.length)];

let cardDataSplit= cardDataRand.split("∆")




let cardBgColorRand = cardBgColor[Math.floor(Math.random() * cardBgColor.length)];




let hmeDivImg =document.querySelector(".hmeImg");
let subheadP =document.querySelector(".subhead");
let paraP =document.querySelector(".para");



hmeDivImg.src= cardDataSplit[0];
subheadP.textContent= cardDataSplit[1];
paraP.textContent= '"'+cardDataSplit[2]+'"';



document.querySelector(".hmeDiv").setAttribute("style","box-shadow:10px 10px " + cardBgColorRand + ", 10px 10px 0 2px #000;");

//console.log(cardBgColorRand)

//box-shadow: -5px 5px #F65F34, -5px 5px 0 2px #000;

document.querySelector(".hmeDiv").style.height= h;

}

/*
window height 646
card height 209
*/









/*TOUCH CODE START*/
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            cardRand();
            
        } else {
            /* right swipe */
            
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
          
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

/*TOUCH CODE END*/
