const formInfo = document.getElementById("form-Info");
const guestInfo = document.querySelector(".guest-info");
const todayDate = document.querySelector(".date");
const makeComment = document.querySelector(".make-comment");
const showCommentBox = document.querySelector(".comment");

let viewercount = 0;

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

    const newH3 = document.createElement("h3");
    const newP = document.createElement("p");
    const comContainer = document.createElement("div");

    newH3.textContent = `${guestname}`;
    newP.textContent = `${comment}`;
    newP.style.width = "350px";
    newP.style.height = "180px";

    // newH3.textContent = `${guestname}`;

    guestInfo.appendChild(comContainer);
    comContainer.appendChild(newH3);
    comContainer.appendChild(newP);

    const today = new Date("11, 26, 2024");
    const month = today.getMonth();
    const date = today.getDate();
    const year = today.getFullYear();

    todayDate.textContent = `${month}, ${date}, ${year}`;
  }
  function writeComment() {
    showCommentBox.classList.remove("hide");
  }
  makeComment.addEventListener("click", writeComment);
}

getGuest();
