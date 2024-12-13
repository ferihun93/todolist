const input_lista_elem = document.getElementById("listaelem_text");
const container = document.getElementById("lista");
const lista_elem = document.getElementsByTagName("li");
let lista_elem_szamlalo = 0;
let lista = [];

// document.addEventListener("keydown", function (event) {
//   // Ellenőrizzük, hogy Enter billentyűt nyomtak
//   if (event.key === "Enter") {
//     const button = document.getElementById("hozzaad");
//     if (button) {
//       button.click(); // Aktiváljuk a gombot
//     }
//   }
// });
const hozzaad_gomb = document
  .getElementById("hozzaad")
  .addEventListener("click", function () {
    if (input_lista_elem.value) {
      // const lista = document.createElement("ul");
      // container.appendChild(lista);
      const lista_element = document.createElement("li");
      container.appendChild(lista_element);
      lista_element.className = `lista_elem_${lista_elem_szamlalo++}`;
      lista_element.textContent = input_lista_elem.value;
      // let modosit = document.createElement("button");
      // modosit.textContent = "módosít";
      // modosit.className = "modositas_gomb";
      // modosit.querySelectorAll('.modositas_gomb').addEventListener("click", function(){
      //   input_lista_elem =
      // })
      // lista_element.appendChild(modosit);
      lista.push(input_lista_elem.value);
      console.log(lista_elem_szamlalo);
      console.log(lista);
    } else {
      return;
    }
  });

const torles = document
  .getElementById("torles")
  .addEventListener("click", function () {
    lista.pop();
    container.removeChild(lista_elem);
    console.log(lista);
  });
