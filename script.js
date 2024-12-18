const color = document.getElementById("color");
const button = document.getElementById("button");

/* manejar al evento */

button.addEventListener("click", cambiarColor);



function cambiarColor(){

  /*  funcion añidada */
  function colores (){
    /* codigo quie se ejecuta */
    const opciones = "0123456789ABCDEF"
    let colorHex = "#";

    /* Recorrer el string opciones  */
    for (let i = 0; i < 6; i++){
      let indicealeatorio = Math.floor(Math.random() * 16);
      colorHex += opciones[indicealeatorio]; // #000000
    }

    return colorHex;
  }

  /* actualiza cambiar texto */
  let coloraleatorio = colores();
  /* actualiza cambiar color */
  color.textContent = coloraleatorio;
  document.body.style.backgroundColor = coloraleatorio;
}