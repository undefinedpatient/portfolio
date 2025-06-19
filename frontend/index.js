
console.log("index.js Loaded");
const numOfSection = 5;
const sectionContainerElement = document.getElementById("sectionContainer");
const navBarElement = document.getElementById("navBar");
// f(x):= -(x**2)+1
function quadraticInterpolation(x, speed = 1, offset = 0){
    return Math.max( (-((speed*(x-offset))**2)+1), 0);
}

function scrollToSection(event){
    const buttonList = event.target.parentElement.children;
    // 
    Array.from(buttonList).forEach((value, index)=>{
            value.classList.remove("active");
            if(value==event.target){
                sectionContainerElement.scrollTo({
                    top: index*sectionContainerElement.clientHeight,
                    left: 0,
                    behavior: "smooth"
                });
            }
        }
    )
    event.target.classList.add("active");
}
sectionContainerElement.addEventListener("scroll", (event)=>{
    // let value = sectionContainerElement.scrollTo;
    let value = (numOfSection-1)*sectionContainerElement.scrollTop/(sectionContainerElement.scrollHeight-sectionContainerElement.clientHeight);
    // clearTimeout(timeout);
    try{
        document.getElementById("homeSection").style.opacity = `${quadraticInterpolation(value, 2, 0)}`;
        document.getElementById("webDevSection").style.opacity = `${quadraticInterpolation(value, 2, 1)}`;
        document.getElementById("softwareDevSection").style.opacity = `${quadraticInterpolation(value, 2, 2)}`;
        document.getElementById("artistSection").style.opacity = `${quadraticInterpolation(value, 2, 3)}`;
        document.getElementById("contactSection").style.opacity = `${quadraticInterpolation(value, 2, 4)}`;
    } catch(error){
        console.log(error);
    }
    Array.from(navBarElement.children).forEach((value)=>{
        value.classList.remove("active");
    })
    navBarElement.children[Math.floor(value)].classList.add("active");
    
});
console.log("index.js Ended");