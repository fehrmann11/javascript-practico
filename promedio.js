function calcularMediaAritmetica(array){
   // let sumaLista = 0;
   /*  for (let index = 0; index < array.length; index++) {
        sumaLista = sumaLista + array[index];
    } */
    //sumar con nuevoElemento y valor acumulado de la lista.
    const sumaLista = array.reduce(
        function(ValorAcumulado=0,nuevoElemento){
            return ValorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista/array.length;
    return promedioLista;
}