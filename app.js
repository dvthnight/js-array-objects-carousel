// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

// const title = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ]

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]


const paese = [
    {
        item : "img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    },

    {
        item : "img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum",
    },

    {
        item : "img/03.jpg",
        title:  "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },

    {
        item : "img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
    },

    {
        item : "img/05.jpg",
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
    },
]


const anteprime = document.getElementById("anteprime");
const contenitoreAnteprime = [];

let fotoCorrente = 0;

for(let i = 0; i < paese.length; i++){
    const anteprima = document.createElement("figure");
    const anteprimaImg = document.createElement("img");

    console.log(paese, paese[i].item)
    
    anteprimaImg.src = paese[i].item;
    anteprima.append(anteprimaImg);
    // console.dir(anteprimaImg);

    contenitoreAnteprime.push(anteprima);
    anteprime.append(anteprima);



    anteprima.addEventListener("click", function(){

        contenitoreAnteprime[fotoCorrente].classList.remove("active");
        fotoCorrente = i;
        contenitoreAnteprime[fotoCorrente].classList.add("active");

        fotoPrincipale.src = paese[fotoCorrente].item;
        contenitorePrincipale.append(fotoPrincipale);
        titoloFoto.innerHTML = paese[fotoCorrente].title;
        paragrafoFoto.innerHTML = paese[fotoCorrente].text;

    })

}
console.log(contenitoreAnteprime)




contenitoreAnteprime[fotoCorrente].classList.add("active");

const arrowDown = document.querySelector(".arrow-down");

const contenitorePrincipale = document.getElementById("contenitore-principale");
const descrizione = document.querySelector(".descrizione");

const fotoPrincipale = document.createElement("img");
fotoPrincipale.src = paese[fotoCorrente].item;
contenitorePrincipale.append(fotoPrincipale);

const titoloFoto = document.getElementById("titolo-foto");
const paragrafoFoto = document.getElementById("paragrafo-foto");

titoloFoto.innerHTML = paese[fotoCorrente].title;
paragrafoFoto.innerHTML = paese[fotoCorrente].text;


arrowDown.addEventListener("click", function(){
    if(fotoCorrente < paese.length -1){
        contenitoreAnteprime[fotoCorrente].classList.remove("active");
        fotoCorrente++;
        contenitoreAnteprime[fotoCorrente].classList.add("active");
   
        fotoPrincipale.src = paese[fotoCorrente].item;
        contenitorePrincipale.append(fotoPrincipale);
        titoloFoto.innerHTML = paese[fotoCorrente].title;
        paragrafoFoto.innerHTML = paese[fotoCorrente].text;
    } else{
        
        contenitoreAnteprime[fotoCorrente].classList.remove("active");
        fotoCorrente = 0;
        contenitoreAnteprime[fotoCorrente].classList.add("active");
   
        fotoPrincipale.src = paese[fotoCorrente].item;
        contenitorePrincipale.append(fotoPrincipale);
        titoloFoto.innerHTML = paese[fotoCorrente].title;
        paragrafoFoto.innerHTML = paese[fotoCorrente].text;
    }
})

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", function(){
    if(fotoCorrente>0){
        contenitoreAnteprime[fotoCorrente].classList.remove("active");
        fotoCorrente--;
        contenitoreAnteprime[fotoCorrente].classList.add("active");
    
        fotoPrincipale.src = paese[fotoCorrente].item;
        contenitorePrincipale.append(fotoPrincipale);
        titoloFoto.innerHTML = paese[fotoCorrente].title;
        paragrafoFoto.innerHTML = paese[fotoCorrente].text;
    }else{
        contenitoreAnteprime[fotoCorrente].classList.remove("active");
        fotoCorrente = paese.length-1;
        contenitoreAnteprime[fotoCorrente].classList.add("active");
    
        fotoPrincipale.src = paese[fotoCorrente].item;
        contenitorePrincipale.append(fotoPrincipale);
        titoloFoto.innerHTML = paese[fotoCorrente].title;
        paragrafoFoto.innerHTML = paese[fotoCorrente].text;
    }
})
