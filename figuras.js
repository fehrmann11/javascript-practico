//código del cuadrado
console.group("cuadrado")
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado son: "+ ladoCuadrado + "cm"); */

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
} 



//console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado*lado;
} 
perimetroCuadrado(4);
areaCuadrado(4);


/* console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2"); */
console.groupEnd();
//código del triángulo
console.group("triangulo")
/* const ladotriangulo1 = 5;
const ladotriangulo2 = 7;
const basetriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo son: "+ ladotriangulo1 + "cm "+ladotriangulo2 + "cm "+basetriangulo + "cm "); */

function perimetrotriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
} 



function areatriangulo(base,altura){
    return (base*altura)/2;
} 

console.groupEnd();

//código del circulo

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return (radio*radio)*Math.PI;
}



console.groupEnd();


//interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const value = document.getElementById("inputCuadrado").value;
    return alert(perimetroCuadrado(value))
}

function calcularAreaCuadrado(){
    const value = document.getElementById("inputCuadrado").value;
    return alert(areaCuadrado(value))
}


function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}