
console.log("index.js Loaded");
const numOfSection = 3;
const sectionContainerElement = document.getElementById("sectionContainer");

function quadraticInterpolation(x, speed = 1, offset = 0){
    return Math.max( (-((speed*(x-offset))**2)+1), 0);
}

sectionContainerElement.addEventListener("scroll", (event)=>{
    // let value = sectionContainerElement.scrollTo;
    let value = (numOfSection-1)*sectionContainerElement.scrollTop/(sectionContainerElement.scrollHeight-sectionContainerElement.clientHeight);
    // clearTimeout(timeout);
    try{
        console.log("x: "+value+" y: "+Math.max( (-(value**2)+1), 0));
        // f(x):= -(x**2)+1
        document.getElementById("homeSection").style.opacity = `${quadraticInterpolation(value, 2, 0)}`;
        document.getElementById("webDevSection").style.opacity = `${quadraticInterpolation(value, 2, 1)}`;
        document.getElementById("contactSection").style.opacity = `${quadraticInterpolation(value, 2, 2)}`;
        console.log(value);
    } catch(error){
        console.log(error);
    }
    
});
console.log("index.js Ended");