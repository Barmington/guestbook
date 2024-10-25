const formInfo = document.getElementById("form-Info");
const guestInfo = document.querySelector(".guest-info");

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(formInfo);
  const body = Object.fromEntries(formData);

  const response = await fetch("http://localhost:3000/guests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const guests = await response.json();
}

formInfo.addEventListener("submit", handleSubmit);

async function getGuest() {
  const response = await fetch("http://localhost:3000/guests");
  const guests = await response.json();

  for (let i = 0; i < guests.length; i++) {
    const guestname = guests[i].guestname;
    const address = guests[i].address;
    const message = guests[i].message;

    const newH3 = document.createElement("h3");

    newH3.textContent = `${guestname}, ${address}, ${message}`;

    guestInfo.appendChild(newH3);
  }
}

getGuest();
