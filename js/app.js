// DEMO
fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
  .then((res) => res.json())
  .then((data) => console.log(data));

//   GETTING INPUT FIELD VALUE
const inputField = document.getElementById("inputField");

// GETTING PHONES CONTAINER
const phonesContainer = document.getElementById("phonesContainer");

// LOADING DATA AND BY SEARCH
const getPhones = () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputField.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPhonesOnSite(data.data));
  // console.log(inputField.value);
};

{
  /* <div class="col">
  <div class="card h-100">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
  </div>
</div>; */
}

// // SHOWIGN PHONES ON SITE
// const showPhonesOnSite = (phones) => {
//   phones.forEach((phone) => {
//     // console.log(phone);
//     const phoneDiv = document.createElement("div");
//     phoneDiv.classList.add("col");
//     phoneDiv.classList.add("phoneCards");
//     phoneDiv.innerHTML = `
//     <div class="card h-100 phoneCards">
//     <div class=" d-flex justify-content-center">
//     <img src="${phone.image}" class="card-img-top p-2 w-75" alt="..." />
//     </div>
//     <div class="card-body">
//       <h5 class="card-title">${phone.phone_name}</h5>
//       <p class="card-text">
//         This is a longer card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </p>
//     </div>
//   </div>
//     `;
//     phonesContainer.appendChild(phoneDiv);
//   });
// };

// SHOWIGN PHONES ON SITE
const showPhonesOnSite = (phones) => {
  for (let i = 0; i < 20; i++) {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.classList.add("phoneCards");
    phoneDiv.innerHTML = `
      <div class="card h-100 phoneCards">
      <div class=" d-flex justify-content-center">
      <img src="${phones[i].image}" class="card-img-top p-2 w-75" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title">${phones[i].phone_name}</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
      `;
    phonesContainer.appendChild(phoneDiv);
  }
  //   phones.forEach((phone) => {
  //     // console.log(phone);
  //   });
};
