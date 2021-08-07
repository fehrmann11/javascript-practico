function calcularPrecioConDescuento(){
    const cupones = ['henry','soyLoMaximo','free'];
    const inputPrice = document.getElementById('price').value;
    const inputDescount = document.getElementById('cupones').value;
    const result = document.getElementById('result');
    let descount;
    switch (inputDescount) {
        
        case cupones[0]:
            console.log(inputDescount)
            descount = 19;
            break;
        case cupones[1]:
            descount = 7;
            break
        case cupones[2]:
            console.log(inputDescount)
            descount = 100;
            break
        default:
            descount = 0;
    }
    let porcentajePrecioDescuento = 100 - descount;
    console.log(porcentajePrecioDescuento)
    const precioConDescuento = (inputPrice * porcentajePrecioDescuento)/100;
    //escribir en javascript
    return result.innerHTML = `${precioConDescuento}`
}





