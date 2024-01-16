let cat = {
  name: "Маркіза",
  breed: "Британка",
  age: 5,
  color: "Сіра",
  personality: "Ласкава",
};

function getInfo(obj) {
  let info = "";
  for (const property of Object.getOwnPropertyNames(obj)) {
    info += `${property}: ${obj[property]}\n`;
  }
  return info;
}
console.log(getInfo(cat)); // Початкова інформація про кішку
// cat.health = "Гарний"; // Додаємо нову властивість про кішку
// console.log(getInfo(cat)); // Виводить всі властивості, включаючи нову