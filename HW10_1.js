var regex = /[^аА]{6,}/;
var arr = ["Мама", "Тато", "Cвекр", "Брат", "Сестра", "Кіт", "Собака", "Дружина", "Друг"];
function testArray(array) {
  for (let i = 0; i < array.length; i++) {
    let result = regex.test(array[i]);
    console.log(`Текст "${array[i]}" ${result ? "відповідає" : "не відповідає"} регулярному виразу`);
  }
}
testArray(arr);
