$(function() {
       
// ScrollReveal
// On stocke la fonction ScrollReveal() dans une variable pour l'appeler facilement
    var sr=ScrollReveal({
    duration: 2000,
    reset: true
});
    
// section Personnages
sr.reveal('.dorian', {delay: 600, origin: 'top', distance: '50px', viewFactor:0.1});
sr.reveal('.basil', {delay: 1200, origin: 'top', distance: '50px', viewFactor:0.1});
sr.reveal('.tableau', {delay: 2000, origin: 'right', distance: '200px', viewFactor:0.1});

// section DORIAN ANIM
sr.reveal('.dorian-anim-2', {delay: 2500,viewFactor: 0.5});
// sr.reveal('.dorian-anim-2', {delay: 2500})


// section LORD HARRY
sr.reveal('.harry', {delay: 600, origin: 'top', distance: '50px',viewFactor: 0.5,});


    
// section CADRE 
sr.reveal('.cadre1-container', {delay: 600, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.cadre2-container', {delay: 600, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.cadre3-container', {delay: 600, viewFactor: 0.5,});
sr.reveal('.cadre4-container', {delay: 600, viewFactor: 0.5,});
sr.reveal('.cadre5-container', {delay: 900, viewFactor: 0.5,});
        
// section NUAGE 
sr.reveal('.easy-1', {delay: 200, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.easy-2', {delay: 400, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.easy-3', {delay: 600, origin: 'top', distance: '50px',viewFactor: 0.2,});

sr.reveal('.mid-soft', {delay: 200, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.mid-1', {delay: 400, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.mid-2', {delay: 600, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.mid-3', {delay: 800, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.mid-4', {delay: 1000, origin: 'top', distance: '50px',viewFactor: 0.2,});

sr.reveal('.hard-soft', {delay: 200, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.hard-mid', {delay: 400, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.hard-1', {delay: 600, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.hard-2', {delay: 800, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.hard-3', {delay: 1000, origin: 'top', distance: '50px',viewFactor: 0.2,});

sr.reveal('.total-A', {delay: 200, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.total-B', {delay: 400, origin: 'top', distance: '50px',viewFactor: 0.2,});
sr.reveal('.total-C', {delay: 600, origin: 'top', distance: '50px',viewFactor: 0.2,});

    


// });

// // on appelle la fonction ScrollReveal() puis la fonction reveal() pour faire apparaître des éléments
// // 1. l'élément (string)
// // 2. les options (objects)


// // on cible le h1
// ScrollReveal().reveal('.hero-content h1', 
//    { 
    
//     // fonctionnalités de base
//     duration: 1500,     // 2.0 duration (number qui est par défaut 500)
//     origin: 'bottom',   // 2.1 origin (string qui est par défaut 'bottom')
//     distance: '50px',   // 2.2 distance (string qui est par défaut '20px')
//     scale: 0.2,         // 2.3 scale (number qui est par défaut 0.9)
//     opacity: 0,         // 2.4 opacity (number qui est par défaut 0)
//     easing: 'cubic-bezier(0.6, 0.4, 0.1, 1)',   // 2.5 easing (string qui est par défaut un effet cubique de Bezier)
//     rotate: {x:0, y:0, z:0},    // 2.6 rotate (object qui est par défaut à 0, pas de rotation)
//     delay: 500,         // 2.7 delay (number en ms qui est par défaut à 0)
  
//     // fonctionnalités avancées
//     container: window.document.documentElement,     // 2.8 container : par défaut la page HTML
//     // on peut cibler une div particulière avec : document.querySelector('.hero-content')
//     reset: true,        // 2.9 reset (booléen qui est par défaut à false, les animations ne fonctionnent qu'une fois)
//     mobile: true,       // 2.10 mobile (booléen qui est par défaut à true), ScrollReveal détecte le viewport du mobile
//     useDelay: 'always', // 2.11 useDelay (string qui est par défaut sur 'always' : le delay est toujours respecté)
//     // on peut choisir la valeur 'once' pour que le delay ne s'applique que la première fois.
//     viewFactor: 0.2,    // 2.12 viewFactor (number qui correspond à un %, par défaut 20%, c'est à partir de ce % de visibilité que l'animation a lieu)
//     viewOffset: {top: 0, right: 0, bottom: 0, left: 0},     // 2.13 viewOffset (object qui permet de définir la taille du viewport)
//     // par défaut, le viewport correspond à toute la fenêtre visible
//     // mais on peut par exemple mettre un top: 100 pour diminuer de 100px la hauteur du viewport
//     beforeReveal: function() { console.log('before reveal')},
//     afterReveal: function() { console.log('after reveal')},     // fonctions Callback avant et après le ScrollReveal

 
  }); 