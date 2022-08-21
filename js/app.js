
let lista = [];

let getJSONData = function(url){
  let result = {};
  
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }else{
      throw Error(response.statusText);
    }
  })
  .then(function(response) {
        result.status = 'ok';
        result.data = response;
        hideSpinner();
        return result;
  })
  .catch(function(error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
  });
}


function desplegar(lista) {
  let contenido = "";
  for (let i = 0; i < lista.length; i++) {
    contenido +=
     '"<tr> <th>Ciudad</th> <th>Precio</th></tr><tr><td>"' +
      lista.ciudad +
      '"</td><td>"' +
      lista.precio +
      '"</td></tr>"';
  };
  document.getElementById("lista").innerHTML = contenido;
};




document.addEventListener("DOMContentLoaded",()=>{
  getJSONData('/html/js/Datos.json').then( resultado =>{
    if (resultado.status === "ok") {
      lista = resultado.data;
      desplegar();
    }
  });
});
