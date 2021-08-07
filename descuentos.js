const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(){
    const inputPrice = document.getElementById('price').value;
    const inputDescount = document.getElementById('descount').value;
    const result = document.getElementById('result')
    const porcentajePrecioDescuento = 100 - inputDescount;
    const precioConDescuento = (inputPrice * porcentajePrecioDescuento)/100;
    //escribir en javascript
    return result.innerHTML = `${precioConDescuento}`
}




