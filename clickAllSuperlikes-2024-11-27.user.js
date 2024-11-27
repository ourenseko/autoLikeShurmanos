// ==UserScript==
// @name         clickAllSuperlikes
// @namespace    http://tampermonkey.net/
// @version      2024-11-27
// @description  try to take over the world!
// @author       You
// @match        https://shurmanos.com/threads/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shurmanos.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // V.1.01 (Estable)

/*   //Si el botón tiene texto rojo no lo pulsa
    // Función para generar un retardo aleatorio entre un rango dado (en milisegundos)
function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para hacer triple clic en todos los botones de Superlike con retardos humanos
async function tripleClickAllSuperlikes() {
    try {
        // Seleccionar todos los botones relevantes en la página
        const superlikeButtons = document.querySelectorAll('a[data-xf-click="sv-rate"]');

        if (superlikeButtons.length > 0) {
            console.log(`Se encontraron ${superlikeButtons.length} botones de Superlike.`);

            // Iterar sobre cada botón y hacer triple clic con retardos humanos
            for (let index = 0; index < superlikeButtons.length; index++) {
                const button = superlikeButtons[index];

                // Verificar si el texto del botón está en color #FF4333 (rojo)
                const buttonTextColor = window.getComputedStyle(button).color;

                // Si el color es #FF4333 (rojo), significa que ya fue pulsado
                if (buttonTextColor === "rgb(255, 67, 51)") { // Color #FF4333 en formato RGB
                    console.log(`El post con ID: ${index + 1} ya tiene Superlike (botón en rojo). Saltando...`);
                    continue; // Si está en rojo, no hacer clic
                }

                // Extraer el ID del post desde el atributo 'data-rating-bar'
                const ratingBar = button.getAttribute('data-rating-bar');
                const postIdMatch = ratingBar.match(/post(\d+)/); // Buscar el número de post

                if (postIdMatch && postIdMatch[1]) {
                    const postId = postIdMatch[1];
                    console.log(`Preparando triple clic en Superlike para el post con ID: ${postId} (Botón ${index + 1})`);

                    // Hacer triple clic con retardos aleatorios entre clics
                    button.click(); // Primer clic
                    await new Promise(resolve => setTimeout(resolve, getRandomDelay(200, 500))); // Retardo entre 200-500 ms
                    button.click(); // Segundo clic
                    await new Promise(resolve => setTimeout(resolve, getRandomDelay(200, 500))); // Retardo entre 200-500 ms
                    button.click(); // Tercer clic

                    console.log(`Triple clic completado para el post con ID: ${postId}.`);

                    // Retardo aleatorio antes de pasar al siguiente botón (simula comportamiento humano)
                    await new Promise(resolve => setTimeout(resolve, getRandomDelay(1000, 3000)));
                } else {
                    console.warn(`No se pudo extraer el ID del post para el botón ${index + 1}.`);
                }
            }

            console.log("Se completaron todos los Superlikes con triple clic y retardos humanos.");
        } else {
            console.error("No se encontraron botones de Superlike en la página.");
        }
    } catch (error) {
        console.error("Error al intentar hacer triple clic en los botones de Superlike:", error);
    }
}

// Ejecutar la función
tripleClickAllSuperlikes();

*/


    // V.1.0  *Si está dado el like lo quita ó puede salir una pantalla de interrupción...*

    // Función para generar un retardo aleatorio entre un rango dado (en milisegundos)
function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para hacer triple clic en todos los botones de Superlike con retardos humanos
async function tripleClickAllSuperlikes() {
    try {
        // Seleccionar todos los botones relevantes en la página
        const superlikeButtons = document.querySelectorAll('a[data-xf-click="sv-rate"]');

        if (superlikeButtons.length > 0) {
            console.log(`Se encontraron ${superlikeButtons.length} botones de Superlike.`);

            // Iterar sobre cada botón y hacer triple clic con retardos humanos
            for (let index = 0; index < superlikeButtons.length; index++) {
                const button = superlikeButtons[index];

                // Extraer el ID del post desde el atributo 'data-rating-bar'
                const ratingBar = button.getAttribute('data-rating-bar');
                const postIdMatch = ratingBar.match(/post(\d+)/); // Buscar el número de post

                if (postIdMatch && postIdMatch[1]) {
                    const postId = postIdMatch[1];
                    console.log(`Preparando triple clic en Superlike para el post con ID: ${postId} (Botón ${index + 1})`);

                    // Hacer triple clic con retardos aleatorios entre clics
                    button.click(); // Primer clic
                    await new Promise(resolve => setTimeout(resolve, getRandomDelay(200, 500))); // Retardo entre 200-500 ms
                    button.click(); // Segundo clic
                    await new Promise(resolve => setTimeout(resolve, getRandomDelay(200, 500))); // Retardo entre 200-500 ms
                    //button.click(); // Tercer clic

                    console.log(`Triple clic completado para el post con ID: ${postId}.`);

                    // Retardo aleatorio antes de pasar al siguiente botón (simula comportamiento humano)
                    await new Promise(resolve => setTimeout(resolve, getRandomDelay(1000, 3000)));
                } else {
                    console.warn(`No se pudo extraer el ID del post para el botón ${index + 1}.`);
                }
            }

            console.log("Se completaron todos los Superlikes con triple clic y retardos humanos.");
        } else {
            console.error("No se encontraron botones de Superlike en la página.");
        }
    } catch (error) {
        console.error("Error al intentar hacer triple clic en los botones de Superlike:", error);
    }
}

// Ejecutar la función
tripleClickAllSuperlikes();


    // Your code here...


})();