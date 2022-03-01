// SINNER DIV
let spinner = document.getElementById("spinner");
spinner.style.display = "none";

//   GETTING INPUT FIELD VALUE
const inputField = document.getElementById("inputField");

// GETTING PHONES CONTAINER
const phonesContainer = document.getElementById("phonesContainer");

// PHONE DETAIL CONTAINER
const phoneDetailContainer = document.getElementById("phoneDetailContainer");

// ERROR MASSASE
const error = document.getElementById("error");

// LOADING DATA AND BY SEARCH
const getPhones = () => {
  spinner.style.display = "block";
  if (inputField.value === "") {
    error.innerText = "Please enter a name!";
    // CLEARING PHONE DETAIL CONTAINER
    phoneDetailContainer.textContent = "";
    // CLEARING PHONE CONTAINER
    phonesContainer.textContent = "";
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
  // CLEARING PHONE DETAIL CONTAINER
  phoneDetailContainer.textContent = "";
  // CLEARING PHONE CONTAINER
  phonesContainer.textContent = "";
  const phones = data.data;
  if (data.status === false) {
    error.innerText = "No match found!";
    // CLEARING PHONE CONTAINER
    phonesContainer.textContent = "";
    spinner.style.display = "none";
  } else {
    const first20Phones = phones.slice(0, 20);
    first20Phones.forEach((phone) => {
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
      spinner.style.display = "none";
      phonesContainer.appendChild(phoneDiv);
    });
    // CLEARING ERROR MASSAGE
    error.innerText = "";
  }
};

// GETTING DETAILE OF INDIVISUAL PHONE
const showMore = (phoneID) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneID}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetail(data));
};

// SWOING DETAILE OF INDIVISUAL PHONE
const showDetail = (phone) => {
  // CLEARING PHOEN DETAIL CONRAINER
  phoneDetailContainer.textContent = "";
  // GETTIGN DATA FROM PHONES DETAIL OBJ
  const name = phone.data.name;
  const releaseDate = phone.data.releaseDate;
  const brand = phone.data.brand;
  const image = phone.data.image;
  const chipSet = phone.data.mainFeatures.chipSet;
  const displaySize = phone.data.mainFeatures.displaySize;
  const memory = phone.data.mainFeatures.memory;
  const sensors = phone.data.mainFeatures.sensors.join(", ");
  const storage = phone.data.mainFeatures.storage;

  let bluetooth = phone.data.others?.Bluetooth;
  let GPS = phone.data.others?.GPS;
  let NFC = phone.data.others?.NFC;
  let Radio = phone.data.others?.Radio;
  let USB = phone.data.others?.USB;
  let WLAN = phone.data.others?.WLAN;

  //   REPLAECE, IF UNDEFIND
  if (bluetooth === undefined) {
    bluetooth = "not found";
  } else if (GPS === undefined) {
    GPS = "not found";
  } else if (NFC === undefined) {
    NFC = "not found";
  } else if (Radio === undefined) {
    Radio = "not found";
  } else if (USB === undefined) {
    USB = "not found";
  } else if (WLAN === undefined) {
    WLAN = "not found";
  }

  const phoneDetailDiv = document.createElement("div");
  phoneDetailDiv.classList.add("row");
  phoneDetailDiv.classList.add("justify-content-center");
  phoneDetailDiv.classList.add("mb-4");

  phoneDetailDiv.innerHTML = `
  <!-- MAIN FEATURES  -->
  <div class="col-lg-7 ">
    <div class="row PhoneDetailcommonColor roundedCorner">
      <div class="col-lg-12 ">
        <div class="row m-2 borderRadiusTop mb-0 bg-white p-2 justify-content-center">
         <div class="col-lg-8">
         <div class="text-center">
           <img class="w-75" src="${image}" alt="" />
          <h5 class="mb-0 mt-2">${name}</h5>
          <p>${releaseDate}</p>
         </div>
         </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row m-2 mb-0 bg-white p-2">
          <div class="col-lg-4 text-center">
            <i class="fa-solid fa-microchip display-4"></i>
            <h6 class="mb-0">CHIP</h6>
          </div>
          <div class="col-lg-8">
                ${chipSet}
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row m-2 mb-0 bg-white p-2">
          <div class="col-lg-4 text-center">
            <i class="fa-solid fa-memory display-5"></i>
            <h6 class="mb-0">MEMORY</h6>
          </div>
          <div class="col-lg-8">
            ${memory}
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row m-2 mb-0 bg-white p-2">
          <div class="col-lg-4 text-center">
            <i class="fa-solid fa-database display-5"></i>
            <h6 class="mb-0">STORAGE</h6>
          </div>
          <div class="col-lg-8">
          ${storage}
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row m-2 mb-0 bg-white p-2">
          <div class="col-lg-4 text-center">
            <h3 class="mb-0">DISPLAY-</h3>
          </div>
          <div class="col-lg-8">
            ${displaySize}
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row m-2 mb-0 bg-white p-2">
          <div class="col-lg-4 text-center">
            <h3 class="mb-0">SENSORS-</h3>
          </div>
          <div class="col-lg-8">
            ${sensors}
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row m-2 borderRadiusBottom bg-white p-2">
          <div class="col-lg-4 text-center">
            <h3 class="mb-0">OTHERS-</h3>
          </div>
          <div class="col-lg-8">
          <p>Bluetooth: ${bluetooth}</p>
          <p>GPS: ${GPS}</p>
          <p>NFC: ${NFC}</p>
          <p>Radio: ${Radio}</p>
          <p>USB: ${USB}</p>
          <p>WLAN: ${WLAN}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- MAIN FEATUR COL ENDS -->
  `;

  //   APPENDING DETAIL DIV TO IT"S PARANT
  phoneDetailContainer.appendChild(phoneDetailDiv);
};
