const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxZoajXDQLfAQyw7TX3QUZJ3gLcMQPc5xj0SUqPv4iO8zK-d6fdi4dwYC1jjdrsWWwu9Q/exec";

function login() {
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg");

  if (!name || !password || !email) {
    msg.innerText = "Please fill all fields";
    return;
  }

  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      password: password,
      email: email
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      window.location.href = "home.html";
    } else {
      msg.innerText = "Invalid name or password";
    }
  })
  .catch(() => {
    msg.innerText = "Server error. Try again.";
  });
}
