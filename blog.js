// alert(document.title)
// display the content of head
// alert(document.head.innerHTML)
// alert(document.body.innerHTML)
document.querySelector("h1").style.color="red"
document.getElementById("author").style.color="blue"
const quote=document.querySelector(".new")
quote.classList.add("myclass")
const content=document.getElementById("bottom")
content.innerText="this is a"
const newelement=document.createElement("h1")
newelement.innerText="this is a new element"
newelement.style.color="green"
// document.body.append(newelement)
// document.querySelector(.old).append(newelement)
// document.quote.prepend(newelement)
// document.querySelector(".new").prepend(newelement)
document.querySelector(".old").insertBefore(newelement,quote)
const clonedElement=quote.cloneNode(true)
document.querySelector(".old").insertBefore(clonedElement,small)
let myElement=document.createElement(h1)