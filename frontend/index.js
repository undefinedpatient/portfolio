console.log("index.js Loaded");
const observerTargets = document.querySelectorAll(".typewriter");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((value, index)=>{
        if(value.isIntersecting){
            value.target.classList.add("active");
        }else{
            value.target.classList.remove("active");
        }
    });
});
observerTargets.forEach((value)=>{
    observer.observe(value);
});

const numOfSection = 5;
const sectionContainerElement = document.getElementById("sectionContainer");
const navBarElement = document.getElementById("navBar");
// f(x):= -(x**2)+1
function quadraticInterpolation(x, speed = 1, offset = 0){
    return Math.max( (-((speed*(x-offset))**2)+1), 0);
}
// Called Everytime the button in the NavBar is clicked.
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
}

// Called Everytime the Scrolling event is fired.
sectionContainerElement.addEventListener("scroll", (event)=>{
    let value = (numOfSection-1)*sectionContainerElement.scrollTop/(sectionContainerElement.scrollHeight-sectionContainerElement.clientHeight);
    Array.from(navBarElement.children).forEach((value)=>{
        value.classList.remove("active");
    });
    // 0.2 is the 20% threshold
    navBarElement.children[Math.floor(value+0.2)].classList.add("active");

    try{
        document.getElementById("homeSection").style.opacity = `${quadraticInterpolation(value, 2, 0)}`;
        document.getElementById("webDevSection").style.opacity = `${quadraticInterpolation(value, 2, 1)}`;
        document.getElementById("softwareDevSection").style.opacity = `${quadraticInterpolation(value, 2, 2)}`;
        document.getElementById("artistSection").style.opacity = `${quadraticInterpolation(value, 2, 3)}`;
        document.getElementById("contactSection").style.opacity = `${quadraticInterpolation(value, 2, 4)}`;
    } catch(error){
        console.log(error);
    }
    
    
});


console.log("index.js Ended");
