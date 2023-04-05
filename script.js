

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

const p1 = document.querySelector("p");
const parrafillo = document.getElementsByClassName("parrafillo");
const parrafo_1 = document.getElementById("parrafo_1");
const input = document.querySelector("input");

console.log(input.value);


console.log({
    h1,
    p1,
    parrafillo,
    parrafo_1,
    input
});

h1.innerHTML = "Texto html <br> ejemplo"; // innerHTML asigna el valor que le pongas en el documento html, incluso acepta las reglas html.
h2.innerText = "Texto innerText <br> ejemplo"; /*innerText asigna el valor que le pongas en el documento html, pero no incluso acepta las  reglas html*/
h1.getAttribute("class");   //Nos ayuda a leer algunos de los atributos que tenga el elemento.      

console.log(h1.getAttribute("class")); 
h1.setAttribute("class", "red");

console.log(h1.getAttribute("class")); 
h1.classList.add("azul");
h1.classList.remove("verde", "red");
console.log(h1.classList)

input.value = "Quien es este personaje?"; // asi  se puede manipular un valor en un imput.

document.createElement("img")  // Ayuda a crear el elemento con la etiqueta html que nosotros queramos. img = imagen, p = parrafo, et...

let imagen = document.createElement("img"); // Creamos una variable que almacene el elemento img creado.
imagen.setAttribute("src", "https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
//insertamos el atributo src para que se añada al html y el directorio o link de la imagen.
console.log(imagen); // Comprobacion del contenido de la etiqueta img

parrafo_1.innerHTML=""; // innerHTML en este caso sustituirá el texto original por el que esté dentro de los strings.
parrafo_1.append(imagen); /* Con la funcion o "metodo" append asignamos el parameto (variable imagen) creado al ID parrafo_1. 
Este ID en html es una etiqueta de parrafo y la imagen se insertara dentro de esta etiqueta (contenedor);*/

//NOTA: el programa va de arriba hacia abajo, primero eliminará el contenido del texto y luego añadira la imagen con el metodo append();




