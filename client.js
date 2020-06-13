console.log(`JS is working`);

$(document).ready(ready());


function ready(){
    console.log(`Jquery is working!`);

   $(function(){
       $(".navPlaceholder").load('nav.html');
   });
   
}

