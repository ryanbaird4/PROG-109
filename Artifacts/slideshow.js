var myImages =["https://www.cesarsway.com/sites/newcesarsway/files/d6/images/features/2012/JUNE/The-History-of-Beagles.jpg", "https://iheartdogs.com/wp-content/uploads/2016/01/Lab-Trio.jpg","https://amp.businessinsider.com/images/528127d66bb3f7c12136f884-960-720.jpg","http://www.insidedogsworld.com/wp-content/uploads/2017/07/German-Shepherd-Standard-Coat-GSC-1000x575-1-1-1-1.jpg","https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/pictures-of-huskies.jpg"];


var captionImages =["Beagle","Labs","Corgis","German Shepherd","Huskies"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next