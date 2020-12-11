$(function() {
       
// ScrollReveal
    
    
// On stocke la fonction ScrollReveal() dans une variable pour l'appeler facilement
    var sr=ScrollReveal({
    duration: 2000,
    reset: true
});
    
// section STREET PHOTO
sr.reveal('.street-photo .un', {delay: 600, origin: 'top', distance: '50px'});
sr.reveal('.street-photo .deux', {delay: 1200, origin: 'top', distance: '50px'});


// section WORK
sr.reveal('.work .un', {delay: 200, origin: 'top', distance: '50px'});
sr.reveal('.work .deux', {delay: 400, origin: 'top', distance: '50px'});
sr.reveal('.work .trois', {delay: 600, origin: 'top', distance: '50px'});
sr.reveal('.work .quatre', {delay: 800, origin: 'top', distance: '50px'});
sr.reveal('.work .cinq', {delay: 1000, origin: 'top', distance: '50px'});
sr.reveal('.work .six', {delay: 1200, origin: 'top', distance: '50px'});
sr.reveal('.work .sept', {delay: 1400, origin: 'top', distance: '50px'});
sr.reveal('.work .huit', {delay: 1600, origin: 'top', distance: '50px'});
sr.reveal('.work .neuf', {delay: 1800, origin: 'top', distance: '50px'});

    
// section ABOUT
sr.reveal('.about .un', {delay: 200, origin: 'top', distance: '50px'});
sr.reveal('.about .deux', {delay: 400, origin: 'top', distance: '50px'});
sr.reveal('.about .trois', {delay: 600, origin: 'top', distance: '50px'});
sr.reveal('.about .quatre', {delay: 800, origin: 'top', distance: '50px'});
sr.reveal('.about .cinq', {delay: 1000, origin: 'top', distance: '50px'});
    
// section BOOKS
sr.reveal('.books .un', {delay: 200, origin: 'top', distance: '50px'});
sr.reveal('.books .deux', {delay: 400, origin: 'top', distance: '50px'});
sr.reveal('.books .trois', {delay: 600, origin: 'top', distance: '50px'});
sr.reveal('.books .quatre', {delay: 800, origin: 'top', distance: '50px'});
sr.reveal('.books .cinq', {delay: 1000, origin: 'top', distance: '50px'});
sr.reveal('.books .six', {delay: 1200, origin: 'top', distance: '50px'});
sr.reveal('.books .sept', {delay: 1400, origin: 'top', distance: '50px'});
sr.reveal('.books .huit', {delay: 1600, origin: 'top', distance: '50px'});

// section PRINTS
sr.reveal('.prints .un', {delay: 200, origin: 'top', distance: '50px'});
sr.reveal('.prints .deux', {delay: 400, origin: 'top', distance: '50px'});
sr.reveal('.prints .trois', {delay: 600, origin: 'top', distance: '50px'});
sr.reveal('.prints .quatre', {delay: 800, origin: 'top', distance: '50px'});
sr.reveal('.prints .cinq', {delay: 1000, origin: 'top', distance: '50px'});
    


});

// on appelle la fonction ScrollReveal() puis la fonction reveal() pour faire apparaître des éléments
// 1. l'élément (string)
// 2. les options (objects)


// on cible le h1
ScrollReveal().reveal('.hero-content h1', 
   { 
    
    // fonctionnalités de base
    duration: 1500,     // 2.0 duration (number qui est par défaut 500)
    origin: 'bottom',   // 2.1 origin (string qui est par défaut 'bottom')
    distance: '50px',   // 2.2 distance (string qui est par défaut '20px')
    scale: 0.2,         // 2.3 scale (number qui est par défaut 0.9)
    opacity: 0,         // 2.4 opacity (number qui est par défaut 0)
    easing: 'cubic-bezier(0.6, 0.4, 0.1, 1)',   // 2.5 easing (string qui est par défaut un effet cubique de Bezier)
    rotate: {x:0, y:0, z:0},    // 2.6 rotate (object qui est par défaut à 0, pas de rotation)
    delay: 500,         // 2.7 delay (number en ms qui est par défaut à 0)
  
    // fonctionnalités avancées
    container: window.document.documentElement,     // 2.8 container : par défaut la page HTML
    // on peut cibler une div particulière avec : document.querySelector('.hero-content')
    reset: true,        // 2.9 reset (booléen qui est par défaut à false, les animations ne fonctionnent qu'une fois)
    mobile: true,       // 2.10 mobile (booléen qui est par défaut à true), ScrollReveal détecte le viewport du mobile
    useDelay: 'always', // 2.11 useDelay (string qui est par défaut sur 'always' : le delay est toujours respecté)
    // on peut choisir la valeur 'once' pour que le delay ne s'applique que la première fois.
    viewFactor: 0.2,    // 2.12 viewFactor (number qui correspond à un %, par défaut 20%, c'est à partir de ce % de visibilité que l'animation a lieu)
    viewOffset: {top: 0, right: 0, bottom: 0, left: 0},     // 2.13 viewOffset (object qui permet de définir la taille du viewport)
    // par défaut, le viewport correspond à toute la fenêtre visible
    // mais on peut par exemple mettre un top: 100 pour diminuer de 100px la hauteur du viewport
    beforeReveal: function() { console.log('before reveal')},
    afterReveal: function() { console.log('after reveal')},     // fonctions Callback avant et après le ScrollReveal

 
  }); 