//GEt Slider iteam | Array.form [Es6 Featture]
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

//get number of slide
var slidesCount =sliderImages.length;

//set current Slide 
var currentSlide = 1;
// slide number Element
var slideNumberElement =document.getElementById("slide-number") ;

//previous and Next Buttons 

var nextButton=document.getElementById('next');
var prevButton = document.getElementById('prev');

//handle click on previous and next buttons

nextButton.onclick = nextSlide ;
prevButton.onclick = prevSlide ;

//  Create the main ul Element 
var pagenationElement= document.createElement('ul')

//Set id on created ul Element
pagenationElement.setAttribute('id','pagination-ul');

// Create list Iteam Baserd on Slids count 

for( var i=1 ; i <= slidesCount; i++){
//create The li 
var pagenationitem= document.createElement('li')

//Set custom attrebuts 
pagenationitem.setAttribute('data-index',i);

// set Item content 
pagenationitem.appendChild(document.createTextNode(i));

// append iteams to the main ul list 
pagenationElement.appendChild(pagenationitem)

}

// Add The Created ul Element to the page
document.getElementById(`indecators`).appendChild(pagenationElement)

//Get the New Created ul 


var pagenationCreatedUl =document.getElementById('pagination-ul') ;

//GEt pagination iteam | Array.form [Es6 Featture]
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop through All bullets iteams
for( var i=0 ; i < paginationBullets.length ; i++){
    paginationBullets[i].onclick =function(){
        currentSlide = parseInt(this.getAttribute('data-index'))
        theChecker();
    }
}



//trigger The Checker function
theChecker();



//next Slide function
function nextSlide(){
if ( nextButton.classList.contains('disabled')){
    return false
}
else
{
   currentSlide++;
   theChecker();
}}

//prev Slide function
function prevSlide(){
   
if( prevButton.classList.contains('disabled'))

{
    return false
}else
{
   currentSlide -- ;
   theChecker();
}}


// created the checker function
function theChecker(){
//Set the slide number

    slideNumberElement.textContent='Slide # '+(currentSlide) + ' of '+(slidesCount);

//Remove all active calsses 
    removeAllActive()
    //Set Active class on current Slide
sliderImages[currentSlide-1].classList.add("active")

// set Active class on current pagenation iteam 
 pagenationCreatedUl.children[currentSlide-1].classList.add('active');

//check if the currentslide is the first

if(currentSlide == 1){
     //Add Disabled Class on previous
    prevButton.classList.add('disabled');
}else{
  //Add Disabled Class on previous
 prevButton.classList.remove('disabled');
}

//*//
//check if the currentslide is the last

if(currentSlide == slidesCount){
     //Add Disabled Class on next
     nextButton.classList.add('disabled');
    }else{
  //Add Disabled Class on next
   nextButton.classList.remove('disabled');
}
}

//remove all active classes from img

function removeAllActive(){
// loop through img
sliderImages.forEach(function(img){
    img.classList.remove('active')
});

// loop through Pagination bullets

paginationBullets.forEach(function (bullet){
    bullet.classList.remove('active');
})

}





















