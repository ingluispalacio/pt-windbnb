/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

const fillContentAnimationById= (id, htmlData, duration=400, type='ease') => {
  const content = document.getElementById(id);

  content.style.transition = `opacity ${duration}ms ${type}, transform ${duration}ms ${type}`;
  content.style.opacity = "0";
  content.style.transform = "translateY(20px)";

  setTimeout(() => {
      content.replaceChildren(htmlData);
      content.style.opacity = "1";
      content.style.transform = "translateY(0)";    
  }, duration);
};

const counterById = (id, decrement=false) =>{
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
  
  content.textContent=number;

  return number;
};
export { fillContentAnimationById, counterById };