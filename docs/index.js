main();

function main(){
    var navbar = document.querySelector("nav.navbar");
    var contactbar = document.querySelector("nav.contactbar");
    if(navbar==null || contactbar==null){
        console.log("Navbar not Found");
    }


    var contact_bar_timeout_td, navbar_timeout_id;
    contactbar.addEventListener("mousemove",()=>{
        clearTimeout(contact_bar_timeout_td);
        console.log("moved");
        contactbar.dataset.isActive = "true";
        contact_bar_timeout_td = setTimeout(()=>{
            contactbar.dataset.isActive = "false";
        }, 1000);
    });
    navbar.addEventListener("mousemove",()=>{
        clearTimeout(navbar_timeout_id);
        console.log("moved");
        navbar.dataset.isActive = "true";
        navbar_timeout_id = setTimeout(()=>{
            navbar.dataset.isActive = "false";
        }, 1000);
    });
}