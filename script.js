// access to the elements
let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let numbers = document.querySelectorAll("#number");
let spans =  document.querySelectorAll("span")
let btn = document.querySelector("#btn1")
let paragraph = document.querySelector("#paragraph");

/* Check to acess the element 
console.log(container)
console.log(numbers)
console.log(btn)
console.log(paragraph)*/

spans.forEach(function(ele) {
    ele.addEventListener("click",function(){   
        spans.forEach(function(ele) {
            ele.classList.remove("active")
        }) ;
        this.classList.add("active")
        btn.addEventListener("click",function() {
            container.style.display = "none";
            container2.style.display = "flex";
           paragraph.innerHTML = `you Selected ${ele.innerHTML} out of 5 ` ;
        })
    })
})