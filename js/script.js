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
  let priceOption = "";
  if (ageUser === "underAge") {
    userPrice = underPrice;
    priceOption = "Tariffa minori";
  } else if (ageUser === "overAge") {
    userPrice = overPrice;
    priceOption = "Tariffa over 65";
  } else {
    userPrice = standardPrice;
    priceOption = "Tariffa Standard";
  }
  console.log(userPrice);

  const coach = Math.floor(Math.random() * 50) + 1;
  const cpCode = Math.floor(Math.random() * 100000) + 1;
  // OUTPUT

  document.getElementById("nameUser").innerHTML = `${nameUser}`;
  document.getElementById("userPrice").innerHTML = `${userPrice}€`;
  document.getElementById("priceOption").innerHTML = `${priceOption}`;
  document.getElementById("coach").innerHTML = `${coach}`;
  document.getElementById("cpCode").innerHTML = `${cpCode}`;
});
