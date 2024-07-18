/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
// Definición de los arreglos con las partes de la excusa
let who = ["Mi gato", "Mi hermano", "El cartero", "Mi pajaro"];
let action = ["comio", "salto", "rompio", "observo"];
let what = ["mi poratil", "mi telefono", "la moto"];
let when = [
  "en el centro comercial",
  "mientras dormia",
  "mientras hacia la compra",
  "cuando estaba desayunando",
  "cuando estaba estudiando"
];

// Función para generar una excusa aleatoria
function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}
window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
