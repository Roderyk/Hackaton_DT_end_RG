window.onload = function() {

var myForm = document.querySelector("form"),
    inputs_req = myForm.querySelectorAll("[required]");

myForm.onsubmit = function (e) {
  e.preventDefault();
  myForm.classList.add("is-submitted");
  for (var i = 0; i < inputs_req.length; i++) {
    inputs_req[i].checkValidity();
  }
}
}