const initDropdownSetting =() =>{
  const dropdownBtn = document.getElementById("dropdown-btn");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const languageBtn = document.getElementById("language-btn");
  const languageMenu = document.getElementById("language-menu");

  const OPEN = ["opacity-100", "scale-100", "pointer-events-auto"];
  const CLOSE = ["opacity-0", "scale-95", "pointer-events-none"];

  function open(el) {
    el.classList.remove(...CLOSE);
    el.classList.add(...OPEN);
  }

  function close(el) {
    el.classList.remove(...OPEN);
    el.classList.add(...CLOSE);
  }

  function toggle(el) {
    if (el.classList.contains("opacity-100")) {
      close(el);
    } else {
      open(el);
    }
  }

 
  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle(dropdownMenu);
  });


  languageBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (window.innerWidth < 768) {
      toggle(languageMenu);
    }
  });

  document.addEventListener("click", (e) => {
    if (
      !dropdownBtn.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      close(dropdownMenu);
      close(languageMenu);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      close(dropdownMenu);
      close(languageMenu);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      close(languageMenu);
    }
  });
}

export { initDropdownSetting };