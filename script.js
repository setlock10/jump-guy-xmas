var character = document.getElementById("character");
var hatIcon = document.getElementById("hat")
var connie= document.getElementById("connie")
var penny= document.getElementById("penny")
character.classList.add("background-stand")
connie.classList.add("connie-stand")
penny.classList.add("penny-stand")



/* Global Variables */
let pressed = false
let characterLeft= 0
let characterTop = 0
let moveTimer = 0
let hasHat = false


/* Event Listeners */
document.addEventListener("keydown",keydown)
document.addEventListener("keyup",keyup)


/* Functions */
function keydown(e){
    pressed===true
    if(e.code==="ArrowRight")run(1)
    if(e.code==="ArrowLeft")run(-1)
    if(e.code==="Space")jump()
}

function keyup(e){
    if(e.code==="ArrowRight"){
        clearInterval(moveTimer)

         character.classList.remove("run");
         connie.classList.remove("run-cat");
         penny.classList.remove("run-cat");
         

        // character.classList.remove("background-run")
        //  character.classList.add("background-stand")
        (hasHat)?(character.classList.remove("background-run-hat")):(character.classList.remove("background-run"));
        (hasHat)?(character.classList.add("background-stand-hat")):(character.classList.add("background-stand"));
        (hasHat)?(connie.classList.remove("connie-run-hat")):(connie.classList.remove("connie-run"));
        (hasHat)?(connie.classList.add("connie-stand-hat")):(connie.classList.add("connie-stand"));
        (hasHat)?(penny.classList.remove("penny-run-hat")):(penny.classList.remove("penny-run"));
        (hasHat)?(penny.classList.add("penny-stand-hat")):(penny.classList.add("penny-stand"));
  
         pressed=false
    }

    if(e.code==="ArrowLeft"){
        clearInterval(moveTimer)
        character.classList.remove("run");
        (hasHat)?(character.classList.remove("background-run-hat")):(character.classList.remove("background-run"));
        (hasHat)?(character.classList.add("background-stand-hat")):(character.classList.add("background-stand"));
        (hasHat)?(connie.classList.remove("connie-run-hat")):(connie.classList.remove("connie-run"));
        (hasHat)?(connie.classList.add("connie-stand-hat")):(connie.classList.add("connie-stand"));
        (hasHat)?(penny.classList.remove("penny-run-hat")):(penny.classList.remove("penny-run"));
        (hasHat)?(penny.classList.add("penny-stand-hat")):(penny.classList.add("penny-stand"));
  
        // character.classList.remove("background-run")
        // character.classList.add("background-stand")
        pressed=false
    }
}




function run(direction){

    if(pressed===true){return;}

    /* Getting the current location of the character */
    characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    console.log(characterLeft)
   
    /* Setting the direction of the character */
    direction<0 ? (character.classList.add("flip")) : (character.classList.remove("flip"));
    direction<0 ? (connie.classList.add("flip")) : (connie.classList.remove("flip"));
    direction<0 ? (penny.classList.add("flip")) : (penny.classList.remove("flip"));
  
    (hasHat)?(character.classList.remove("background-stand-hat")):(character.classList.remove("background-stand"));
    (hasHat)?(character.classList.add("background-run-hat")):(character.classList.add("background-run"));
    (hasHat)?(connie.classList.remove("connie-stand-hat")):(connie.classList.remove("connie-stand"));
    (hasHat)?(connie.classList.add("connie-run-hat")):(connie.classList.add("connie-run"));
    (hasHat)?(penny.classList.remove("penny-stand-hat")):(penny.classList.remove("penny-stand"));
    (hasHat)?(penny.classList.add("penny-run-hat")):(penny.classList.add("penny-run"));

    
    //character.classList.remove("background-stand");
    //character.classList.add("background-run");
    character.classList.add("run");
    penny.classList.add("run-cat")
    connie.classList.add("run-cat")
    pressed=true

    moveTimer=setInterval(move,10,direction)
}

function move(direction){
    direction<0 ? (characterLeft-=2) : (characterLeft+=2)

    /* Defining our movement boundaries */
    if (characterLeft>=800){characterLeft=800} 
    if (characterLeft<0){characterLeft=0} 

    character.style.left=characterLeft+'px';
    penny.style.left=characterLeft+((-145)*direction)+'px';
    connie.style.left=characterLeft+((-60)*direction)+'px';
}

function jump(){
    if((character.classList == "animate-jump")||(character.classList == "animate-jump-hat")){return};

    console.log(character);
    console.log(hasHat);
    //character.classList.remove("background-stand");
    //character.classList.add("background-run");
 
  //  (hasHat)?(character.classList.add("background-run-hat")):(character.classList.add("background-run"));

    (hasHat)?(character.classList.add("animate-jump-hat")):(character.classList.add("animate-jump"));

    if(hasHat){
        character.classList.add("animate-jump-hat")
    }
    else{
    //    character.classList.add("background-run");
    }
 


    setTimeout(removeJump,300) //300ms = length of animation
}


function checkHat(){

    characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    //console.log(characterTop)

    if((characterTop<330)&&((characterLeft>330)&&(characterLeft<470))){
        console.log("true");
        hasHat = true;

        character.classList.add("background-run-hat");

        clearInterval(hatCheck);
        hatIcon.classList.add("hidden")




    }   

}

let hatCheck = setInterval(checkHat, 10);

function removeJump(){
   // (hasHat)?(character.classList.remove("animate-jump-hat")):(character.classList.remove("animate-jump"));
    character.classList.remove("animate-jump");
    character.classList.remove("animate-jump-hat")

}
