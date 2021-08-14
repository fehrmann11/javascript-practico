//Helpers utils
function esPar(n) {
    return (n %2 ===0);//true o false
}

function calcularMediaAritmetica(array) {
    console.log(array)
    //sumar con nuevoElemento y valor acumulado de la lista.
    const sumaLista = array.reduce(
        function (ValorAcumulado = 0, nuevoElemento) {
            return ValorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / array.length;
    return promedioLista;
}

//Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana general
const salariosCol = colombia.map(
    function(person){
        return person.salary;
    }
);

//ordena los salarios 
const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA -salaryB
    }
);


//Mediana del top 10%
const spliceStart = ((salariosColSorted.length * (90))/100);
const spliceCount = salariosColSorted.length-spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);







const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
})