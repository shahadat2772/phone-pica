// DEMO
// fetch(
//   "https://openapi.programming-hero.com/api/phone/apple_iphone_13_mini-11104"
// )
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//   GETTING INPUT FIELD VALUE
const inputField = document.getElementById("inputField");

// GETTING PHONES CONTAINER
const phonesContainer = document.getElementById("phonesContainer");

// PHONE DETAIL CONTAINER
const phoneDetailContainer = document.getElementById("phoneDetailContainer");

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
const showDetail = (phone) => {
  // GETTIGN DATA FROM PHONEs DETAIL OBJ
  const name = phone.data.name;
  console.log(name);
  const releaseDate = phone.data.releaseDate;
  console.log(releaseDate);
  const brand = phone.data.brand;
  console.log(brand);
  const image = phone.data.image;
  console.log(image);
  const chipSet = phone.data.mainFeatures.chipSet;
  console.log(chipSet);
  const displaySize = phone.data.mainFeatures.displaySize;
  console.log(displaySize);
  const memory = phone.data.mainFeatures.memory;
  console.log(memory);
  const sensors = phone.data.mainFeatures.sensors.join(", ");
  console.log(sensors);
  const storage = phone.data.mainFeatures.storage;
  console.log(storage);
  const others = phone.data.others;
  //   const dataInOthers = Object.keys(others);
  //   //   const info = Object.entries(others);
  //   //   let infoArray = [];
  //   //   for (const [key, value] of Object.entries(others)) {
  //   //     infoArray.push(key, value);
  //   //   }

  //   //   const infoArrayData = infoArray.join(",");

  //   for (const data of dataInOthers) {
  //     console.log(data, ":", others[data]);
  //   }

  console.log(others);

  console.log(phone);
  const phoneDetailDiv = document.createElement("div");
  phoneDetailDiv.classList.add("row");
  phoneDetailDiv.classList.add("justify-content-center");

  phoneDetailDiv.innerHTML = `
  <!-- Phone Card -->
  <div class="col-lg-4 d-flex justify-content-center">
    <div
      class="card h-100 PhoneDetailcommonColor p-2"
      style="width: 18rem"
    >
      <div class="bg-white text-center py-3">
        <img
          src="${image}"
          class="card-img-top img-fluid w-50"
          alt="..."
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">
          <i class="fa-solid fa-calendar-day"></i> ${releaseDate} <br />
          Sensors: ${sensors} <br />
          Brand: ${brand}
        </p>
      </div>
    </div>
  </div>
  <!-- Phone Card END -->
  <!-- MAIN FEATURE  -->
  <div class="col-lg-6">
    <div class="row PhoneDetailcommonColor">
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
        <div class="row m-2  bg-white p-2">
          <div class="col-lg-4 text-center">
            <h3 class="mb-0">OTHERS</h3>
          </div>
          <div class="col-lg-8">
            <!-- <i class="fa-solid fa-microchip display-4"></i> -->
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

{
  /* <div class="row justify-content-center">
          <!-- Phone Card -->
          <div class="col-lg-4 d-flex justify-content-center">
            <div
              class="card h-100 PhoneDetailcommonColor p-2"
              style="width: 18rem"
            >
              <div class="bg-white text-center py-3">
                <img
                  src="apple-iphone-13-mini.jpg"
                  class="card-img-top img-fluid w-50"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  <i class="fa-solid fa-calendar-day"></i> 12/122/43 <br />
                  Sensors: Face ID, accelerometer, gyro, proximity, compass,
                  barometer<br />
                  Brand:
                </p>
              </div>
            </div>
          </div>
          <!-- Phone Card END -->
          <!-- MAIN FEATURE  -->
          <div class="col-lg-6">
            <div class="row PhoneDetailcommonColor">
              <div class="col-lg-12">
                <div class="row m-2 mb-0 bg-white p-2">
                  <div class="col-lg-4 text-center">
                    <i class="fa-solid fa-microchip display-4"></i>
                    <h6 class="mb-0">CHIP</h6>
                  </div>
                  <div class="col-lg-8">
                    <!-- <i class="fa-solid fa-microchip display-4"></i> -->
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row m-2 mb-0 bg-white p-2">
                  <div class="col-lg-4 text-center">
                    <i class="fa-solid fa-camera display-5"></i>
                    <h6 class="mb-0">CAMERA</h6>
                  </div>
                  <div class="col-lg-8">
                    <!-- <i class="fa-solid fa-microchip display-4"></i> -->
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
                    <!-- <i class="fa-solid fa-microchip display-4"></i> -->
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
                    <!-- <i class="fa-solid fa-microchip display-4"></i> -->
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row m-2 bg-white p-2">
                  <div class="col-lg-4 text-center">
                    <!-- <i class="fa-solid fa-database display-5"></i> -->
                    <h3 class="mb-0">DISPLAY-</h3>
                  </div>
                  <div class="col-lg-8">
                    <!-- <i class="fa-solid fa-microchip display-4"></i> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- MAIN FEATUR COL ENDS -->
        </div> */
}
