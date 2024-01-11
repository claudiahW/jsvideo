// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// select button and video container

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// add eventlistener for the button to check if it has the slide class or not

btn.addEventListener("click", function(){
if(!btn.classList.contains("slide")){
    btn.classList.add("slide");
    video.pause();
}
else{
 btn.classList.remove("slide"); 
 video.play();  
}
});
