
  
/* Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro */

function changeTitle() {
    let element = document.getElementById("brand");
    let text = element.innerText;
    element.innerText = text + "s";
}

changeTitle();





/* Scrivi una funzione per cambiare il colore di background della pagina */


function changeBkg(){
    let element = document.querySelector("body");
    console.log(element);
    element.style.backgroundColor = "rgba(211, 211, 211, 1)";
}

changeBkg();


/* Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio */


function changeAddress(){
    let element = document.querySelector("footer");
    let lastElement = element.children[element.children.length-1];
    lastElement.innerText = "Via del crocifisso 90, Siracusa,SR, 26738"
    
}

changeAddress();

/* Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella */


function addClassLink(){
    let element = document.getElementsByTagName("a");
    for(let i=0;i<element.length;i++){
        element[i].classList.add("amazonBtn");
    }
}

addClassLink();

/* Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine */


function hiddenImg(){
    let element = document.getElementsByTagName("img");
    for(let i=0;i<element.length;i++){
        element[i].classList.toggle("visible");
    }
}

hiddenImg();

/* Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata */


function changeColor(color){
    let Element = document.querySelector("main");
    let elements = Element.getElementsByTagName("span");
    for(let i=0; i<elements.length;i++){
        elements[i].style.color = color;
    }
}


changeColor("red");
changeColor("green");
changeColor("orange");