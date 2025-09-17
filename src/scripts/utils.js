/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

const fillContentAnimationById = (
  id,
  htmlData,
  duration = 400,
  type = "ease",
  addElement = false,
  delay = 0
) => {
  const content = document.getElementById(id);
  if (!content) return;
  

  if (addElement) {
    htmlData.style.opacity = "0";
    htmlData.style.transform = "translateY(20px)";
    htmlData.style.transition = "none";
    htmlData.style.willChange = "opacity, transform";
    content.appendChild(htmlData);
     requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      htmlData.style.transition = `opacity ${duration}ms ${type} ${delay}ms, transform ${duration}ms ${type} ${delay}ms`;
      htmlData.style.opacity = "1";
      htmlData.style.transform = "translateY(0)";

     
      const onEnd = (e) => {
        if (e.propertyName === "opacity") {
          htmlData.style.willChange = "";
          htmlData.removeEventListener("transitionend", onEnd);
        }
      };
      htmlData.addEventListener("transitionend", onEnd);
    });
  });
  } else {
    content.style.opacity = "0";
    content.style.transform = "translateY(20px)";
    content.style.transition = "none";
    content.style.willChange = "opacity, transform";
    content.replaceChildren(htmlData);
     requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      content.style.transition = `opacity ${duration}ms ${type} ${delay}ms, transform ${duration}ms ${type} ${delay}ms`;
      content.style.opacity = "1";
      content.style.transform = "translateY(0)";

      // opcional: limpiamos will-change al finalizar
      const onEnd = (e) => {
        if (e.propertyName === "opacity") {
          content.style.willChange = "";
          content.removeEventListener("transitionend", onEnd);
        }
      };
      content.addEventListener("transitionend", onEnd);
    });
  });
  }

  
};

const counterById = (id, decrement = false) => {
  const content = document.getElementById(id);
  if (!content) return 0;
  const match = content.textContent.match(/\d+/);

  let number = 0;

  if (match) {
    number = parseInt(match[0], 10);
  }

  if (decrement) {
    number = Math.max(0, number - 1);
  } else {
    number++;
  }

  content.textContent = number;

  return number;
};

const showLoading = (containerId)=>{
  const container = document.getElementById(containerId);
  if (!container) return;

  
  container.innerHTML = "";

 
  const wrapper = document.createElement("div");
  wrapper.className = "flex items-center";

  
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("role", "status");
  svg.setAttribute("class", "inline w-5 h-5 me-3 animate-spin text-[#EB5757]");
  svg.setAttribute("viewBox", "0 0 100 101");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z");
  path1.setAttribute("fill", "#E5E7EB");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z");
  path2.setAttribute("fill", "currentColor");

  svg.appendChild(path1);
  svg.appendChild(path2);

 
  const span = document.createElement("span");
  span.textContent = "Loading...";

  
  wrapper.appendChild(svg);
  wrapper.appendChild(span);
  container.appendChild(wrapper);
}

export { fillContentAnimationById, counterById, showLoading };
