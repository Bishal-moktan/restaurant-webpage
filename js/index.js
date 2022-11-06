


const button = document.getElementById("submit-btn")
const fullName = document.getElementById("fullName")
const message = document.getElementById("message")
const email = document.getElementById("email_id")
const address = document.getElementById("address")


button.addEventListener('click', (e) => {
    message.innerText = `Thank you ${fullName.value} for contacting us. We will soon contact you in ${email.value}  and check our branches at ${address.value} 😊😊`
    const form  = document.querySelector(".form")
    message.style.cssText = `
    width: 50%;
    text-align: center;
    background-color: #8758FF;
    color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.4);
    `
    form.style.display = "none"
    e.preventDefault()

})

