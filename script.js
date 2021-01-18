let card_positions = {};

function randNumber(n) {
   return Math.floor(Math.random() * (n - 1)) +1;
}

function getKey(key) {
    if (key in card_positions) {
        key = key -1; 
        if (key === 0) {
            key = 20;
        } 
       return getKey(key); 
    }
    return key;
}
//-->  Sagatovots kartiņu pozīcijas <--//
for (let i = 20; i >= 1; i--) {
    let rand_number = randNumber(i); 

    let card_value = i;

    if (card_value > 10)  {
        card_value = card_value - 10;
    }
    card_positions[getKey(rand_number)] = card_value;  
    
}
console.log(card_positions);

for (let i = 1; i <= 20; i++) {
        let element = document.createElement("div");
        element.setAttribute('data-value', card_positions[i]);

        document.querySelector(".container"). append(element);  
}
//--> tiek ievietotas kartiņas<--//

let cards = document.querySelectorAll('.container div');

let last_card = false;
let game_on = true;
//-->Kartiņām tiek piešķirts notikums<--//
for (let card of cards) {
    card.addEventListener("click", function() {
            if (game_on === true) {

                if (last_card !== false && 
                    last_card != card && 
                    last_card.getAtribute('data-value') === card.getAtribute('data-value');
                ) {
                    card.classList.add("active");
                    last_card.classList.add("active");
                    addRestartButton();
                    game_on = false;
                }
                last_card = card; 
            }   
    });
 
}
//--> Izveidoju restart pogu (addRestartButton- šo nosaukumu jaizdomā pašam)<--//
function addRestartButton() {
    let button = document.createElement('button');
    button.textContent = "Reset";
    button.addEventListener('click', function() {
        location.reload();
    });
   
    document.querySelector('body').append(button);
}
// turpinājums nodarbība 04.01.2021, 30.12.2020 nodarbības otra daļa 1:08 ir kods pamēģināt pirms pašama pievienot visus elementus.//


//-->pabeidzu 04.01. 2 daļa 41:21<---//



 

 






/* pirmais uzdevums no nodrbības28.12*/
/*
console.log('testa teksts')
//-->atrodam visus selektorus kas atrodas document --> .container div<--//
let div_bloki = document.querySelectorAll(".container div")
//--> izvadam visus elementus iekš container div (div_bloki)<--//
console.log(div_bloki);*/
 
/*-->Mainīgā definēšana<--
let pedeja_vertiba = 0;*/

/* --> cikls sākas (kurš izvada paziņojumu vērtības sakrita ja uzpiež uz diviem blokiem kam teksta vērtības ir vienādas ) <--
for (let div of div_bloki) { 
   div.addEventListener('click', function (){
    console.log(this);
    if (pedeja_vertiba === this.textContent) {
       console.log('vērtības sakrita')  
    }
    pedeja_vertiba = this.textContent;
   }); 
} */
