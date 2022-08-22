
function desplegar(datos) {
  
  let contenido = "";
  for (let dato of datos) {
    contenido +=
    `<tr> <th>Ciudad</th> <th>Precio</th></tr><tr><td> `+
      dato.ciudad +
      ` </td><td>` +
      dato.precio +
      `</td></tr>`;
  };
  document.getElementById("lista").innerHTML = contenido;
};







document.addEventListener("DOMContentLoaded",()=>{
  fetch("Carpeta/MOCK_DATA.json")
.then(( response) => response.json ())
 .then ((json) => {
desplegar(json);
 });
});
    
 
