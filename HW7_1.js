let testNaN = '1' //0/0; // Сюды вписуемо наші данні для перевірки //1 видає нам фолс, 0/0 видає нам тру
let isNaN;

if (testNaN !== testNaN) 
{
    isNaN = true;
} else 
    {
    isNaN = false;
    }

console.log(isNaN);