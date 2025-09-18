/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { getAllStays, fillCardStays } from "./stays.js";
import { drawerFilters, toggleFilter, searchStays } from "./filters.js";
import { initDropdownSetting } from './settings.js'
import { showLoading, showLoadingSpinner, resetLocalStorage } from "./utils.js";

resetLocalStorage();

showLoadingSpinner("filter-stay-city");
showLoadingSpinner("city-location");

showLoading("main-content-card");

initDropdownSetting();

setTimeout(async () => {
  const response = await getAllStays();
  if (response.success) {
    toggleFilter(response.data);
    fillCardStays(response.data);
    searchStays(() => fillCardStays(response.data));
  }

  drawerFilters();
}, 3000);
