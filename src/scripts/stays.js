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

const fillCardStays = (data, callbackAnimation, limit=6 ) => {
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
    const matchStay = stayCity ? item.city.toLowerCase() === stayCity.toLowerCase() : true;
    const matchGuest = guests ? item.maxGuests >= guests : true;
    return matchStay && matchGuest;
  });

  const filteredLength = filtered.length > limit ? `${limit}+` : filtered.length;

  const contentTitle = document.createElement("div");
  contentTitle.className="flex justify-between items-start mt-10 md:mt-4 lg:mt-10 mb-8";
  const h2Title = document.createElement("h2");
  h2Title.textContent=`Stays in ${stayCity}`;
  h2Title.className="text-2xl font-semibold";
  const h3Title = document.createElement("h3");
  h3Title.textContent=`${filteredLength} stays`;
  h3Title.className="text-[#575757]";
  contentTitle.appendChild(h2Title);
  contentTitle.appendChild(h3Title);
  callbackAnimation("main-content-title", contentTitle);
  callbackAnimation("main-content-card", "");
  let delay = 0;
  const itemsToShow = filtered.length > limit ? limit : filtered.length;
  for (let index = 0; index < itemsToShow; index++) {
    const stay = filtered[index];
    const beds = stay.beds ? `· ${stay.beds } beds`: '';
    const contentCard = document.createElement("div");
    contentCard.className = "flex flex-col gap-2";
    const contentCardImg = document.createElement("div");
    contentCardImg.className = "flex flex-col gap-1 mb-4";
    const cardImg = document.createElement("img");
    cardImg.src = stay.photo;
    cardImg.alt = `${stay.type} ${beds}`;
    cardImg.className = "rounded-3xl xs:h-60 ss:h-68 ms:h-74 md:h-68 lg:h-55  2xl:h-140 object-cover";
    contentCardImg.appendChild(cardImg);

    
    const contentCardDetails = document.createElement("div");
    contentCardDetails.className = "flex flex-col gap-2";

    const detailTop = document.createElement("div");
    detailTop.className = "flex justify-between items-center";

    const titleWrapper = document.createElement("div");
    if (stay.superHost) {
      const superHost = document.createElement("span");
      superHost.textContent = "SUPER HOST";
      superHost.className = "border border-gray-500 rounded-full px-3 py-1.5 text-xs font-bold uppercase mr-2";
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
    description.className = "text-base font-semibold";

    contentCardDetails.appendChild(detailTop);
    contentCardDetails.appendChild(description);
    contentCard.appendChild(contentCardImg);
    contentCard.appendChild(contentCardDetails);
    callbackAnimation("main-content-card", contentCard, 600, 'ease-out', true, delay);
    delay+=200;    
  };
};

export { getAllStays, fillCardStays };
