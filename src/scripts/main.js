/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { getAllStays, fillCardStays } from "./stays.js";
import { drawerFilters, toggleFilter, searchStays } from "./filters.js";
import {
  fillContentAnimationById,
  counterById,
  showLoading,
  showModal,
} from "./utils.js";

showLoading("filter-stay-city");
showLoading("city-location");

const response = await getAllStays();
if (response.success) {
  toggleFilter(response.data, fillContentAnimationById, counterById);
  fillCardStays(response.data, fillContentAnimationById, showModal);
  searchStays(() => fillCardStays(response.data, fillContentAnimationById, showModal));
}

drawerFilters();
