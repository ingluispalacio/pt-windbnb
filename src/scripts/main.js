/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { getAllStays, fillCardStays } from "./stays.js";
import {
    drawerFilters,
    toggleFilter
} from "./filters.js"
import { fillContentAnimationById, counterById } from "./utils.js";

const response = await getAllStays();
if (response.success) {
    toggleFilter(response.data, fillContentAnimationById, counterById);
    fillCardStays(response.data, fillContentAnimationById);
}

drawerFilters();

