const formInfo = document.getElementById("form-Info");
const guestInfo = document.querySelector(".guest-info");
const makeComment = document.querySelector(".make-comment");
const showCommentBox = document.querySelector(".comment");

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
    const comment = guests[i].comment;
    const newH3 = document.createElement("h4");
    const newP = document.createElement("p");
    const comContainer = document.createElement("div");

    newH3.textContent = `${guestname}`;
    newP.textContent = `${comment}`;

    guestInfo.appendChild(comContainer);
    comContainer.appendChild(newH3);
    comContainer.appendChild(newP);
    comContainer.classList.add("com-container");
  }

  makeComment.addEventListener("click", writeComment);
}

getGuest();
