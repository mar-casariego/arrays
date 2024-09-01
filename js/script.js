// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);

  //Filtrar los elementos de tipo string.
  const newArray = strangeArray.filter(element => typeof element === "string"); 

  //Ordenar la lista alfabéticamente
  const newArrayOrdenada = newArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); 
 
  /*
   - (a,b) =>... es una función de comparación.
   
  - toLowerCase() es un método de las cadenas de texto que convierte todas las letras de una cadena a minúsculas.
   Convierte ambos elementos a y b en minúsculas para asegurar que la comparación no se vea afectada 
  por las diferencias en mayúsculas y minúsculas.

  - localeCompare() compara dos cadenas de acuerdo con el orden de los caracteres en un idioma específico.
*/
  
  showList(newArrayOrdenada);
});


