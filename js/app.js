
function desplegar(datos) {
  let contenido = "";
  for (let dato of datos) {
    contenido +=
     "<div> <label>" +
      dato.ciudad + "</label><input type='number'>" +"<label>"+ dato.precio +
      "</label></div>";
  }
  document.getElementById("lista").innerHTML = contenido;
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("Carpeta/MOCK_DATA.json")
    .then((response) => response.json())
    .then((json) => {
      desplegar(json);
    });
});
