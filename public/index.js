import CodersArray from "./CodersArray/CodersArray.js";

const numbers = new CodersArray(1, 2, 3, 4);
const animals = new CodersArray("gato", "perro", "hamster");
const cars = new CodersArray("Lambo", "Ferrari", "Seat");

export { numbers, animals, cars };

console.log(cars.push("Opel", "Papas"));
