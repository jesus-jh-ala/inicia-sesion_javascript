function validar(){
// Obtener los datos escritos en el formulario 
let usuario = document.getElementById ("usuario").value;
let contrasena = document.getElementById ("contrasena").value;

// Comprobar usuario y contraseña
if (usuario =="admin" && contrasena =="12345") {

   alert ("Bienvenido al sistema");
   window.location.href = "bienvenida.html";
   return false;

} else {

   alert ("Usuario o contraseña incorrectos");
   return false;
}
}

function calcular() {
    // Obtener las cantidades ingresadas
    let c1 = Number(document.getElementById("cant1").value) || 0;
    let c2 = Number(document.getElementById("cant2").value) || 0;
    let c3 = Number(document.getElementById("cant3").value) || 0;
    let c4 = Number(document.getElementById("cant4").value) || 0;
    let c5 = Number(document.getElementById("cant5").value) || 0;
    let c6 = Number(document.getElementById("cant6").value) || 0;

    if (c1 < 0 || c2 < 0 || c3 < 0 || c4 < 0 || c5 < 0 || c6 < 0) {
        document.getElementById("suma").innerText = "Por favor, ingresa cantidades válidas (0 o mayores).";
        return;
    }

    // Multiplicar cada cantidad por el precio de la tabla
    let total = (c1 * 1200) + (c2 * 1500) + (c3 * 1300) + (c4 * 1800) + (c5 * 800) + (c6 * 1600);

    // Mostrar el resultado en pantalla
    document.getElementById("suma").innerText = "El total a pagar es: $" + total;
}