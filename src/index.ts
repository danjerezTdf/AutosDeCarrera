let vueltaUno: number = Number(prompt(`Ingrese tiempo de vuelta uno`));
let vueltaDos: number = Number(prompt(`Ingrese tiempo de vuelta dos`));
let vueltaTres: number = Number(prompt(`Ingrese tiempo de vuelta tres`));
let vueltaCuatro: number = Number(prompt(`Ingrese tiempo de vuelta cuatro`));

let tiempoTotal: number = vueltaUno + vueltaDos + vueltaTres + vueltaCuatro;

console.log(`El tiempo total de las 4 vueltas fue: `, tiempoTotal);
console.log(`El promedio de vuelta fue: `, tiempoTotal / 4);
