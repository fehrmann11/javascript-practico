function calcularModa(lista) {
    const listaCount = {};

    //listaCount[4] = 4 veces 
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    //ordena la lista por valor acumulado {"4":5,"2":2...etc}
    let listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    )
    
    const moda = Number(listaArray[listaArray.length - 1][0]);
    return moda;

}




