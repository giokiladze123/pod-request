const email = document.querySelector(".input-tablet input")
const button = document.querySelector("button")
const error = document.querySelector(".error")

button.addEventListener("click",function(){
  const value = email.value;
  if (value.includes("@") && value.includes(".")) {
    error.className = "error"
  } else {
    error.className = "right"
  }
})
