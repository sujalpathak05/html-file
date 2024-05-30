var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
 console.log(navMenuAnchorTags);
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){ 
    event.preventDefault();
    var targetSectionID=this.textContent.trim().toLowerCase();
    var targetSection=document.getElementById(targetSectionID);
    console.log(targetSection);
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
    console.log(targetSectionCoordinates);
    var interval=setInterval(function(){
        var targetSectionCoordinates=targetSection.getBoundingClientRect();
        if(targetSectionCoordinates.top<=0)
        {
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
    },20);
     });
}


// var progressBars=document.querySelectorAll('.skill-progress >div');
// var skillsContainer=document.getElementById('skills-container');
// console.log(skillsContainer);
// window.addEventListener('scroll',checkScroll);
// var animationDone=false;

// function initializeBars()
// {
//     for(let bar of progressBars){
//         bar.style.width=0 +'%';
//     }
// }
// initializeBars();

// function fillBars(){
//     for(let bar of progressBars)
//     {
//         let targetWidth=bar.getAttribute('data-bar-width');
//         let currentWidth=0;
//         let interval=setInterval(function(){
//         if(currentWidth > targetWidth)
//         {
//             clearInterval(interval);
//             return;
//         }
//         currentWidth++;
//         bar.style.width=currentWidth +'%';
//         },1);
//     }
// }
// function checkScroll()
// {
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if(!animationDone && coordinates.top<=window.innerHeight)
//     {
//     animationDone=true;
//     console.log("skills section visible");
//     fillBars();
//     }
//     else if(coordinates.top>window.innerHeight)
//     {
//         animationDone=false;
//         initializeBars();
//     }
// }

