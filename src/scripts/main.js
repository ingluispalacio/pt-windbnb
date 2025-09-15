/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { getAllStays } from "./stays.js";

const response = await getAllStays();
if (response.success) {
    console.log("estadias", response.data)
}
