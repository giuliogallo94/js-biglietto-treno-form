const nameUserElem = document.getElementById("name-user");

const kmUserElem = document.getElementById("km-user");

const ageUserElem = document.getElementById("age-user");

let userPrice = document.querySelector(".user-price");

// DATI

const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", function () {
  console.log("Funziona!");
  const nameUser = nameUserElem.value;
  const kmUser = parseInt(kmUserElem.value);
  const ageUser = ageUserElem.value;
  console.log(nameUser, kmUser, ageUser);

  const kmPrice = 0.21;

  // LOGICA

  const standardPrice = kmUser * kmPrice;
  console.log(standardPrice);

  const underPrice = standardPrice - standardPrice * 0.2;
  const overPrice = standardPrice - standardPrice * 0.4;

  let userPrice = "";

  if (ageUser === "underAge") {
    userPrice = underPrice;
  } else if (ageUser === "overAge") {
    userPrice = overPrice;
  } else {
    userPrice = standardPrice;
  }
  console.log(userPrice);
});

// OUTPUT
function getOption() {
  selectElement = document.querySelector("#select1");
  output = selectElement.options[selectElement.selectedIndex].value;
  document.querySelector(".output").textContent = output;
}
