function notify() {
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg");

  if (email === "") {
    msg.style.color = "red";
    msg.innerText = "Please enter a valid email address.";
  } else {
    msg.style.color = "green";
    msg.innerText = "Thank you! We'll notify you soon ☕";
    document.getElementById("email").value = "";
  }
}
