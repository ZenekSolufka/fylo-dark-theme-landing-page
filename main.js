const earlyAcessForm = document.querySelector(".earlyaccess__form")
const email = earlyAcessForm.earlyaccess__email
const feedbackElement = email.nextSibling.nextSibling

const emailValidation = (event) => {
  event.preventDefault()
  const isValidEmail = email.validity.valid
  
  if(!isValidEmail){
    console.log(feedbackElement)
    feedbackElement.style = "opacity:1;"
    return
  }

  alert("Cadastrado.")
  email.value = "";
  feedbackElement.style = "opacity:0;"
}

const cleanFeedback = () => {
  feedbackElement.style = "opacity:0;"
}

earlyAcessForm.addEventListener("submit", emailValidation)
earlyAcessForm.earlyaccess__email.addEventListener("focus", cleanFeedback )