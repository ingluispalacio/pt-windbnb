import {
  fillContentAnimationById,
  counterById,
  getOrCreateLocalStorage,
  setLocalStorage
} from "./utils.js";

const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const openButton = document.getElementById("openDrawer");
const closeButton = document.getElementById("closeDrawer");

const openDrawer = () => {
  drawer.classList.remove("-translate-y-full");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

const closeDrawer = () => {
  drawer.classList.add("-translate-y-full");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
}

const drawerFilters = () => {
  openButton.addEventListener("click", openDrawer);
  closeButton.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
      closeDrawer();
    }
  });
};

const toggleFilter = (data) => {
  const contentLabelCityLocation = document.getElementById(
    "content-label-city-location"
  );
  const labelCityLocation = document.getElementById("label-city-location");
  const cityLocation = document.getElementById("city-location");
  const filterStayCity = document.getElementById("filter-stay-city");
  const contentLabelGuest = document.getElementById("content-label-guest");
  const labelGuest = document.getElementById("label-guest");
  const guest = document.getElementById("guest");
  const highlight = document.getElementById("highlight");

  const moveHighlight = (target) => {
    const parentRect = target.parentElement.getBoundingClientRect();
    const containerRect = target
      .closest("div.relative")
      .getBoundingClientRect();

    const offsetX = parentRect.left - containerRect.left;
    const offsetY = parentRect.top - containerRect.top;

    highlight.style.width = `${parentRect.width}px`;
    highlight.style.height = `${parentRect.height}px`;
    highlight.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    highlight.style.opacity = "1";
  };

  contentLabelCityLocation.addEventListener("click", () => {
    moveHighlight(labelCityLocation);

    cityLocation.classList.remove("text-[#bdbdbd]");
    guest.classList.add("text-[#bdbdbd]");

    const newData = [...new Set(data.map((m) => `${m.city}, ${m.country}`))];
    filterStayCity.textContent = newData[0];
    cityLocation.textContent = newData[0];
    const ul = document.createElement("ul");
    ul.className = "flex flex-col gap-6";
    newData.forEach((element) => {
      const li = document.createElement("li");
      li.className = "flex gap-2 cursor-pointer";
      const imgLocation = document.createElement("img");
      imgLocation.src = "./src/images/icons/location_5df7949e.svg";
      imgLocation.alt = "Location Icon";
      imgLocation.className = "w-3.5 h-3.5";
      const text = document.createTextNode(element);
      li.appendChild(imgLocation);
      li.appendChild(text);
      ul.appendChild(li);
      li.addEventListener("click", () => {
        cityLocation.textContent = element;
      });
    });
    fillContentAnimationById("content-city-location", ul);
    fillContentAnimationById("content-guest", "");
  });

  contentLabelGuest.addEventListener("click", () => {
    moveHighlight(labelGuest);

    guest.classList.remove("text-[#bdbdbd]");
    cityLocation.classList.add("text-[#bdbdbd]");

    const wrapper = document.createElement("div");
    wrapper.className = "flex flex-col gap-6";
    wrapper.appendChild(
      createGuestCounter(
        "Adults",
        "Ages 13 or above",
        "adultTotal",
        counterById
      )
    );
    wrapper.appendChild(
      createGuestCounter("Children", "Ages 2-12", "childTotal")
    );

    fillContentAnimationById("content-guest", wrapper);
    fillContentAnimationById("content-city-location", "");
  });

  contentLabelCityLocation.click();
};

const createGuestCounter = (
  title,
  subtitle,
  idCounter,
  options = {}
) => {
  const { affectsTotal = true } = options;

  if (!idCounter) return;
  
  const guestCounter = document.createElement("div");
  guestCounter.className = "flex flex-col gap-2";

  const contents = document.createElement("div");

  const h2Title = document.createElement("h2");
  h2Title.textContent = title;
  h2Title.className = "font-semibold";

  const h2Subtitle = document.createElement("h2");
  h2Subtitle.textContent = subtitle;
  h2Subtitle.className = "text-gray-400";

  contents.appendChild(h2Title);
  contents.appendChild(h2Subtitle);

  const countDiv = document.createElement("div");
  countDiv.className = "flex gap-4";

  const btnDecrement = document.createElement("button");
  btnDecrement.textContent = "-";
  btnDecrement.className =
    "text-gray-400 bg-white border border-gray-500 px-2 rounded-sm cursor-pointer hover:bg-gray-100";

  const pTotal = document.createElement("p");
  pTotal.textContent = getOrCreateLocalStorage(idCounter, "0");
  pTotal.id = idCounter;
  pTotal.className = "text-sm font-extralight";

  pTotal.dataset.affectsTotal = affectsTotal ? "true" : "false";

  const btnIncrement = document.createElement("button");
  btnIncrement.textContent = "+";
  btnIncrement.className =
    "text-gray-400 bg-white border border-gray-500 px-2 rounded-sm cursor-pointer hover:bg-gray-100";

  const updateGuestTotal = () => {
    const guest = document.getElementById("guest");
    const counters = document.querySelectorAll("[data-affects-total='true']");
    let total = 0;

    counters.forEach((el) => {
      total += parseInt(el.textContent, 10) || 0;
    });

    if (total > 0) {
      guest.textContent = `${total} guest${total > 1 ? "s" : ""}`;
    } else {
      guest.textContent = "Add guests";
    }
  };

  btnIncrement.addEventListener("click", () => {
    counterById(idCounter, false, setLocalStorage);
    updateGuestTotal();
  });
  btnDecrement.addEventListener("click", () => {
    counterById(idCounter, true, setLocalStorage);
    updateGuestTotal();
  });

  countDiv.appendChild(btnDecrement);
  countDiv.appendChild(pTotal);
  countDiv.appendChild(btnIncrement);

  guestCounter.appendChild(contents);
  guestCounter.appendChild(countDiv);

  return guestCounter;
};

const searchStays = (callbackFillCard) => {
  const cityLocation = document.getElementById("city-location");
  const filterStayCity = document.getElementById("filter-stay-city");
  const guest = document.getElementById("guest");
  const filterGuest = document.getElementById("filter-guest");

  const applyFilters = () => {
    filterStayCity.textContent = cityLocation.textContent;
    filterGuest.textContent = guest.textContent;
    callbackFillCard();
    closeDrawer();
  }

  document.querySelectorAll(".btn-search").forEach(btn => {
    btn.addEventListener("click", applyFilters);
  });
};

export { drawerFilters, toggleFilter, searchStays };
