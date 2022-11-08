const toggleButton = document.querySelector(".togglerButton")
const links = document.getElementsByClassName("links")[0]

toggleButton.addEventListener("click", ()=> {
    console.log(links)
    links.classList.toggle("active")
})
