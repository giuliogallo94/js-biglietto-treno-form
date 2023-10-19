const kmUserElem = document.getElementById("km-user");

const ageUserElem = document.getElementById("age-user");

const userPrice = document.querySelector(".user-price");

const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function () {
  console.log("Funziona!");
  const kmUser = parseInt(kmUserElem.value);
  const ageUser = parseInt(ageUserElem.value);
  console.log(kmUser, ageUser);
});
