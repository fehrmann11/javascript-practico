
function calcularMediaAritmetica(array) {
    //sumar con nuevoElemento y valor acumulado de la lista.
    const sumaLista = array.reduce(
        function (ValorAcumulado = 0, nuevoElemento) {
            return ValorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / array.length;
    return promedioLista;
}

function esPar(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}



function calcularMediana(array) {
    console.log(array)
    array.sort();
    const mitad = parseInt(array.length / 2);
    let mediana;
    if (esPar(array.length)) {
        const e1 = array[mitad];
        const e2 = array[mitad - 1];
        mediana = calcularMediaAritmetica([e1, e2])
        return mediana;

    } else {

        mediana = array[mitad]
        return mediana;
    }
}






