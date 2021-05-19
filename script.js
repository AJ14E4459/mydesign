window.onload = () =>{
    setTimeout(()=>{
        document.querySelector("body").classList.add
        ('display');
    },4000);
};

document.querySelector(".hamburger-menu").
addEventListener("click",() =>{
    document.querySelector(".line").classList.
    toggle("change");
    document.querySelector(".line-2").classList.
    toggle("change");
    document.querySelector(".line-3").classList.
    toggle("change");
    document.querySelector(".sidebar").classList.
    toggle("change")
    
    
});
document.querySelector(".scroll-btn").addEventListener
("click",() =>{
    document.querySelector('html').style.
    scrollBehavior= "smooth";
    setTimeout(() =>{
         document.querySelector('html').style.
         scrollBehavior="unset";
    },1000);
});


