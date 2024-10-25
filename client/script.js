const formInfo = document.getElementById("form-Info");
const guestInfo = document.querySelector(".guest-info");
let counter = 0;

let guests;

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(formInfo);
  const body = Object.fromEntries(formData);

  const response = await fetch("http://localhost:3000/guests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  guests = await response.json();
}

form.addEventListener("submit", handleSubmit);

async function getGuest() {}
getGuest();
