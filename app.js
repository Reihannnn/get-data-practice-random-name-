const { json } = require("body-parser");
const randomName = require("node-random-name");
// const randomFoto = require("random-cat-img");

const arr = [];
const usedName = new Set();



function getData(id, name, kelas) {
  return {
    id,
    name,
    kelas,
  };
}

function generateID() {
  return new Date().getTime();
}

function getName() {
  let name;

  do {
    name = randomName();
  } while (usedName.has(name));
  {
    usedName.add(name);
    return name;
  }
}

function getKelas() {
  const kelas = `2IA${Math.floor(Math.random() * 27 + 1)}`;
  return kelas;
}

for (let i = 0; i < 20; i++) {
  const result = getData(generateID(), getName(), getKelas());
  arr.push(result);
}

console.table(arr);
console.log(arr)
const hasilJson = JSON.stringify(arr)
console.log(hasilJson);

// const lastResult = JSON.stringify(arr);
// console.log(lastResult);

console.log(` ini tipe nya  :${typeof(arr)}`); // arr 
