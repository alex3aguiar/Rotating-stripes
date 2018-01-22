
// Set default values for perspective property
TweenLite.set("#confetti-container", {perspective:600})

var no_of_elements = 20;

var warp = document.getElementById("confetti-container"),
    innerWidth = window.innerWidth,
    innerHeight = window.innerHeight;
 
// Load into page
 for (i=0; i < no_of_elements; i++) { 
   var Div = document.createElement ('div');

   TweenLite.set (Div, { className:'falling-element', x:Randomizer(0, innerWidth), y:Randomizer(-200, -150), z:Randomizer(-200, 200)});
   warp.appendChild (Div);
   
   // Run animation
   falling_animation (Div);
 }
 
// Falling animation
 function falling_animation(element) {   
   //TweenMax.to(e, Randomizer(6, 16), {y:innerHeight+100, ease:Linear.easeNone, repeat:-1, delay:-15});
   //TweenMax.to(e, Randomizer(4, 8), {x:'+=100',rotationZ:Randomizer(0, 180), repeat:-1, yoyo:true, ease:Sine.easeInOut});
   //TweenMax.to(e,Randomizer(2, 8), {rotationX:Randomizer(0,360),rotationY:Randomizer(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
   
   TweenMax.to(element, Randomizer(6, 16), {y:innerHeight+100, ease:Linear.easeNone, repeat:-1, delay:-15});
   TweenMax.to(element, Randomizer(4, 8), {x:'+=100',rotationZ:Randomizer(0, 180), repeat:-1, yoyo:true, ease:Sine.easeInOut});
   TweenMax.to(element, Randomizer(2, 8), {rotationX:Randomizer(0,360),rotationY:Randomizer(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

// Randomizer
function Randomizer(min, max) {return min + Math.random()*(max-min) };
