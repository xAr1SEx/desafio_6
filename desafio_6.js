let entrada = confirm("TABLA DE MULTIPLICACION")
let texto = prompt("ESCRIBA UN NUMERO:")
let tablebody = document.getElementById("tbody")
let tablehead = document.getElementById("thead")
let fila = document.createElement("tr")
fila.innerHTML = `<th id="titulo">TABLA DE MULTIPLICACION DE ${texto}</th>`;
fila.setAttribute("id", "fila");
tablehead.appendChild(fila);
for( i=1; i<=12 ; i++) {
    let cuerpo = document.createElement("tr")
    resultado = texto * i;
    cuerpo.innerHTML = `<td id="multiplicacion"> 5 * ${i} = ${resultado}</td>`
    tablebody.appendChild(cuerpo);
}