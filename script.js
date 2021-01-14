//--> Nodarbība 30.12.<--//
let cards = document.querySelectorAll('.container div');

let last_card = false;
let game_on = true;
for (let card of cards) {
    card.addEventListener("click", function() {
            if (game_on === true) {
                if (last_card !== false && last_card != card && last_card.textContent === card.textContent) {
                    card.style.background = "green";
                    last_card.style.background = "green";
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
