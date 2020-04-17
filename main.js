// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
let myName = "Zane"

const firstHeader = document.querySelector(".article__header")
firstHeader.textContent = `Welcome to the ${myName} blog`

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const headers = document.querySelectorAll(".article__header")
for (i = 0; i < headers.length; i++) {
    headers[i].classList.add("important")
}

// Obtain a reference the element with a class of dashed and remove it.
const removeDash = document.querySelector(".dashed")
removeDash.classList.remove("dashed")

// Obtain a reference the element with a class of article__footer and add the class of goldenrod it.
const goldenRod = document.querySelector(".article__footer")
goldenRod.classList.add("goldenrod")