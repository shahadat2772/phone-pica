// DEMO
fetch(
  "https://openapi.programming-hero.com/api/phone/apple_iphone_13_mini-11104"
)
  .then((res) => res.json())
  .then((data) => console.log(data));

//   GETTING INPUT FIELD VALUE
const inputField = document.getElementById("inputField");

// GETTING PHONES CONTAINER
const phonesContainer = document.getElementById("phonesContainer");

// ERROR MASSASE DIV
const error = document.getElementById("error");

// LOADING DATA AND BY SEARCH
const getPhones = () => {
  if (inputField.value === "") {
    error.innerText = "Please enter a name!";
  } else {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputField.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => showPhonesOnSite(data));
  }
  //CLEARING INPUT FIELD
  inputField.value = "";
};

// SHOWIGN PHONES ON SITE
const showPhonesOnSite = (data) => {
  // CLEARING PHONE CONTAINER
  phonesContainer.textContent = "";
  const phones = data.data;
  //   console.log(phones);
  if (data.status === false) {
    error.innerText = "No match found!";
    // CLEARING PHONE CONTAINER
    phonesContainer.textContent = "";
  } else {
    const first20Phones = phones.slice(0, 20);
    first20Phones.forEach((phone) => {
      // console.log(phone);
      const phoneDiv = document.createElement("div");
      phoneDiv.classList.add("col");
      phoneDiv.classList.add("phoneCards");
      phoneDiv.innerHTML = `
      <div class="card h-100 phoneCards">
      <div class=" d-flex justify-content-center">
      <img src="${phone.image}" class="card-img-top p-2 w-75" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">
        Brand: ${phone.brand} <br>
        <button onclick="showMore('${phone.slug}')" class="moreBtn border-0 px-2 mt-2">More</button>
        </p>
      </div>
    </div>
      `;
      phonesContainer.appendChild(phoneDiv);
    });
    error.innerText = "";
  }
};

// GETTING DETAILE OF INDIVISUAL PHONE
const showMore = (phoneID) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneID}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetail(data));
  //   console.log(phoneID);
};

// SWOING DETAILE OF INDIVISUAL PHONE
const showDetail = (data) => {
  console.log(data);
};
