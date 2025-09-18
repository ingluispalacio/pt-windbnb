/**
 * Un array de objetos que representa estancias en varias ciudades de Finlandia.
 * Cada objeto contiene detalles sobre una estancia específica, incluyendo:
 *
 * @constant {Array<Object>} stays
 * @property {string} city - La ciudad donde se encuentra la estancia.
 * @property {string} country - El país donde se encuentra la estancia (siempre "Finlandia").
 * @property {boolean} superHost - Indica si el anfitrión es un superanfitrión.
 * @property {string} title - El título o descripción de la estancia.
 * @property {number} rating - La calificación de la estancia (sobre 5).
 * @property {number} maxGuests - El número máximo de huéspedes permitidos.
 * @property {string} type - El tipo de alojamiento (por ejemplo, "Apartamento entero", "Casa entera", "Habitación privada").
 * @property {number|null} beds - El número de camas disponibles (puede ser null si no se especifica).
 * @property {string} photo - Una URL a una foto del alojamiento.
 */

import { fillContentAnimationById, showModal } from "./utils.js";

export const stays = [
  {
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Stylist apartment in center of the city",
    rating: 4.4,
    maxGuests: 3,
    type: "Entire apartment",
    beds: 2,
    photo:
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: false,
    title: "Nice apartment in center of Helsinki",
    rating: 4.2,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Helsinki",
    country: "Finland",
    superHost: true,
    title: "Arty interior in 1900 wooden house",
    rating: 4.5,
    maxGuests: 10,
    type: "Entire house",
    beds: 6,
    photo:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Apartment next to market spuare",
    rating: 4.48,
    maxGuests: 3,
    type: "Entire apartment",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: true,
    title: "Villa Aurora guest-house",
    rating: 4.75,
    maxGuests: 9,
    type: "Entire house",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80",
  },
  {
    city: "Vaasa",
    country: "Finland",
    superHost: true,
    title: "A cosy family house",
    rating: 4.95,
    maxGuests: 6,
    type: "Entire house",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Vaasa",
    country: "Finland",
    superHost: false,
    title: "Lovely Studio near Railway Station",
    rating: 4.68,
    maxGuests: 2,
    type: "Private room",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80",
  },
  {
    city: "Oulu",
    country: "Finland",
    superHost: false,
    title: "Peaceful little home in city center",
    rating: 4.12,
    maxGuests: 6,
    type: "Entire house",
    beds: 3,
    photo:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Oulu",
    country: "Finland",
    superHost: false,
    title: "Beautiful new studio apartment nearby the center",
    rating: 4.49,
    maxGuests: 2,
    type: "Entire apartment",
    beds: 1,
    photo:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80",
  },
  {
    city: "Oulu",
    country: "Finland",
    superHost: true,
    title: "Cozy woodhouse flat with wooden sauna",
    rating: 4.38,
    maxGuests: 4,
    type: "Entire house",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80",
  },
  {
    city: "Vaasa",
    country: "Finland",
    superHost: false,
    title: "Brand new studio apartment near the harbour",
    rating: 4.89,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Beautiful and comfortable old wooden house",
    rating: 4.63,
    maxGuests: 10,
    type: "Entire house",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: false,
    title: "Turku Nordic Home near city center",
    rating: 4.24,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80",
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: true,
    title: "Nice 2 room apartment close to everything",
    rating: 4.34,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80",
  },
];

const getAllStays = async () => {
  try {
    const response = await fetch("./src/data/stays.json");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (data.length > 0) {
      return {
        success: true,
        data: data,
        message: "Estadias encontrada correctamente",
      };
    }
    return {
      success: false,
      data: null,
      message: "No tenemos estadias disponibles",
    };
  } catch (error) {
    console.error("Error en getAllStays:", error.message);
    return {
      success: false,
      data: null,
      message: error.message,
    };
  }
};

const fillCardStays = (data, limit = 6) => {
  const mainContentCard = document.getElementById("main-content-card");

  const filterStayCity = document.getElementById("filter-stay-city");
  const filterGuest = document.getElementById("filter-guest");
  const stay = filterStayCity.textContent;
  let stayCity = "";
  if (stay.includes(",")) {
    stayCity = stay.split(",")[0].trim();
  }
  const match = filterGuest.textContent.match(/\d+/);

  let guests = 0;
  if (match) {
    guests = parseInt(match[0], 10);
  }

  const filtered = data.filter((item) => {
    const matchStay = stayCity
      ? item.city.toLowerCase() === stayCity.toLowerCase()
      : true;
    const matchGuest = guests ? item.maxGuests >= guests : true;
    return matchStay && matchGuest;
  });

  const filteredLength =
    filtered.length > limit ? `${limit}+` : filtered.length;

  const contentTitle = document.createElement("div");
  contentTitle.className =
    "flex justify-between items-start mt-10 md:mt-4 lg:mt-10 mb-8";
  const h2Title = document.createElement("h2");
  h2Title.textContent = `Stays in ${stayCity}`;
  h2Title.className = "text-2xl font-semibold";
  const h3Title = document.createElement("h3");
  h3Title.textContent = `${filteredLength} stays`;
  h3Title.className = "text-[#575757]";
  contentTitle.appendChild(h2Title);
  contentTitle.appendChild(h3Title);
  fillContentAnimationById("main-content-title", contentTitle);
  fillContentAnimationById("main-content-card", "");
  let delay = 0;
  if (filtered.length === 0) {
    mainContentCard.className = "flex justify-center items-center";
    fillContentAnimationById(
      "main-content-card",
      showNoStaysMessage(),
      2500,
      "ease-in-out",
      true,
      delay
    );
    return;
  }
  
  mainContentCard.className =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12";
  const itemsToShow = filtered.length > limit ? limit : filtered.length;
  for (let index = 0; index < itemsToShow; index++) {
    const stay = filtered[index];
    const beds = stay.beds ? `· ${stay.beds} beds` : "";
    const contentCard = document.createElement("div");
    contentCard.className = "flex flex-col gap-2";
    const contentCardImg = document.createElement("div");
    contentCardImg.className = "flex flex-col gap-1 mb-4";
    const cardImg = document.createElement("img");
    cardImg.src = stay.photo;
    cardImg.alt = `${stay.type} ${beds}`;
    cardImg.className =
      "rounded-3xl xs:h-60 ss:h-68 ms:h-74 md:h-68 lg:h-67 xl:h-75 2xl:h-140 object-cover";
    contentCardImg.appendChild(cardImg);

    const overlay = document.createElement("div");
    overlay.className = `
      absolute inset-0  rounded-3xl 
      flex items-end justify-end 
      opacity-100   lg:items-start
      lg:opacity-0 lg:hover:opacity-100 lg:transition-opacity duration-300
    `;

    const buttonMore = document.createElement("button");
    buttonMore.textContent = "See more";
    buttonMore.className = `
      px-2 py-1 rounded-full shadow-md text-[8px] 
      bg-black/80 text-white transition mt-2 mr-2 
      cursor-pointer lg:bg-black/60 lg:text-gray-200 
      md:px-4 md:py-2 md:text-xs
      lg:hover:bg-black/80 lg:hover:text-white 
    `;

    buttonMore.addEventListener("click", () => {
      const contentStay = openStayModal(stay);
      showModal("modal", "modalContent", contentStay);
    });

    overlay.appendChild(buttonMore);
    contentCardImg.appendChild(overlay);

    const contentCardDetails = document.createElement("div");
    contentCardDetails.className = "flex flex-col gap-2";

    const detailTop = document.createElement("div");
    detailTop.className = "flex justify-between items-center";

    const titleWrapper = document.createElement("div");
    titleWrapper.className = "flex w-full";
    if (stay.superHost) {
      const superHost = document.createElement("span");
      superHost.textContent = "SUPER HOST";
      superHost.className =
        "border border-gray-500 rounded-full px-2 py-1 text-xs font-bold uppercase mr-2";
      titleWrapper.appendChild(superHost);
    }

    const typeText = document.createElement("span");
    typeText.textContent = `${stay.type} ${beds}`;
    typeText.className = "text-gray-600";
    titleWrapper.appendChild(typeText);

    const ratingWrapper = document.createElement("div");
    ratingWrapper.className = "flex items-center gap-2";
    const star = document.createElement("img");
    star.src = "./src/images/icons/star_55f860b4.svg";
    star.alt = "star";
    star.className = "w-4 h-4";
    const rating = document.createElement("span");
    rating.textContent = stay.rating;
    rating.className = "text-sm font-light";
    ratingWrapper.appendChild(star);
    ratingWrapper.appendChild(rating);

    detailTop.appendChild(titleWrapper);
    detailTop.appendChild(ratingWrapper);

    const description = document.createElement("h2");
    description.textContent = stay.title;
    description.className = "text-base font-bold w-[70%] lg:w-full";

    contentCardDetails.appendChild(detailTop);
    contentCardDetails.appendChild(description);
    contentCard.appendChild(contentCardImg);
    contentCard.appendChild(contentCardDetails);
    fillContentAnimationById(
      "main-content-card",
      contentCard,
      2500,
      "ease-in-out",
      true,
      delay
    );
    delay += 200;
  }
};

const openStayModal = (stay) => {
  const container = document.createElement("div");
  container.className = " flex flex-col md:flex-row ";

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "md:w-1/2 w-full";
  const img = document.createElement("img");
  img.src = stay.photo;
  img.alt = stay.title;
  img.className =
    "h-60 md:h-auto md:max-h-[90vh] w-full object-cover rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none  md:rounded-bl-2xl";
  imgWrapper.appendChild(img);

  const info = document.createElement("div");
  info.className = "p-6 md:w-1/2 flex flex-col gap-4";

  const title = document.createElement("h2");
  title.textContent = stay.title;
  title.className = "text-xl font-bold";

  const typeRow = document.createElement("div");
  typeRow.className = "flex items-center gap-2";
  const type = document.createElement("span");
  type.textContent = `${stay.type} ${stay.beds ? `· ${stay.beds} beds` : ""}`;
  type.className = "text-gray-600 text-sm";
  typeRow.appendChild(type);
  if (stay.superHost) {
    const superHost = document.createElement("span");
    superHost.textContent = "Super Host";
    superHost.className =
      "border border-gray-500 rounded-full px-2 py-1 text-xs font-bold uppercase";
    typeRow.appendChild(superHost);
  }

  const location = document.createElement("p");
  location.className = "flex gap-1 text-gray-700 text-sm items-center";
  const iconLocation = document.createElement("img");
  iconLocation.src = "./src/images/icons/location_5df7949e.svg";
  iconLocation.alt = "location";
  iconLocation.className = "w-4 h-4";
  const textLocation = document.createElement("span");
  textLocation.textContent = `${stay.city}, ${stay.country}`;
  location.appendChild(iconLocation);
  location.appendChild(textLocation);

  const ratingRow = document.createElement("div");
  ratingRow.className = "flex items-center gap-2";
  const star = document.createElement("img");
  star.src = "./src/images/icons/star_55f860b4.svg";
  star.alt = "star";
  star.className = "w-4 h-4";
  const rating = document.createElement("span");
  rating.textContent = stay.rating;
  rating.className = "text-sm font-medium";
  ratingRow.appendChild(star);
  ratingRow.appendChild(rating);

  const guests = document.createElement("p");
  guests.className = "flex items-center gap-1 text-gray-700 text-sm";

  guests.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" 
       fill="none" viewBox="0 0 24 24" 
       stroke-width="1.5" stroke="currentColor" 
       class="w-4 h-4 text-gray-800">
    <path stroke-linecap="round" stroke-linejoin="round" 
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 
             9.337 9.337 0 0 0 4.121-.952 
             4.125 4.125 0 0 0-7.533-2.493M15 
             19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 
             19.128v.106A12.318 12.318 0 0 1 
             8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 
             6.375 0 0 1 11.964-3.07M12 
             6.375a3.375 3.375 0 1 1-6.75 
             0 3.375 3.375 0 0 1 6.75 
             0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 
             0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
  <span>Max Guests: ${stay.maxGuests}</span>
`;

  const actionBtn = document.createElement("button");
  actionBtn.textContent = "Reserve now";
  actionBtn.className =
    "bg-black text-white px-4 py-2 rounded-full mt-4 hover:bg-gray-900 cursor-pointer";

  info.appendChild(title);
  info.appendChild(typeRow);
  info.appendChild(location);
  info.appendChild(ratingRow);
  info.appendChild(guests);
  info.appendChild(actionBtn);

  container.appendChild(imgWrapper);
  container.appendChild(info);
  return container;
};

const showNoStaysMessage = () => {
  const filterStayCity = document.getElementById("filter-stay-city");
  const filterGuest = document.getElementById("filter-guest");

  if (document.querySelector(".no-stays-message")) return;

  const wrapper = document.createElement("div");
  wrapper.className =
    "no-stays-message w-full max-w-lg mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center";

  const title = document.createElement("h2");
  title.className = "text-lg font-semibold text-gray-800 mb-2";
  title.textContent = "We didn't find any available stays.";

  const desc = document.createElement("p");
  desc.className = "text-sm text-gray-500 mb-4";
  desc.textContent =
    "Try adjusting your search by changing the city or the number of guests.";

  const location = document.createElement("p");
  location.className =
    "flex justify-center gap-1 text-gray-700 text-sm items-center";

  const iconLocation = document.createElement("img");
  iconLocation.src = "./src/images/icons/location_5df7949e.svg";
  iconLocation.alt = "location";
  iconLocation.className = "w-4 h-4";

  const textLocation = document.createElement("span");
  textLocation.textContent = filterStayCity.textContent;

  location.appendChild(iconLocation);
  location.appendChild(textLocation);

  const pillWrapper = document.createElement("div");
  pillWrapper.className = "flex justify-center";

  const pill = document.createElement("div");
  pill.className = "px-4 py-2 text-sm font-medium flex items-center gap-1";
  pill.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        stroke-width="1.5" stroke="currentColor" 
        class="w-4 h-4 text-gray-800">
      <path stroke-linecap="round" stroke-linejoin="round" 
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 
              9.337 9.337 0 0 0 4.121-.952 
              4.125 4.125 0 0 0-7.533-2.493M15 
              19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 
              19.128v.106A12.318 12.318 0 0 1 
              8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 
              6.375 0 0 1 11.964-3.07M12 
              6.375a3.375 3.375 0 1 1-6.75 
              0 3.375 3.375 0 0 1 6.75 
              0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 
              0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
    <span>${filterGuest.textContent}</span>
  `;


  pillWrapper.appendChild(pill);

  wrapper.appendChild(title);
  wrapper.appendChild(desc);
  wrapper.appendChild(location);
  wrapper.appendChild(pillWrapper);

  return wrapper;
};

export { getAllStays, fillCardStays };
