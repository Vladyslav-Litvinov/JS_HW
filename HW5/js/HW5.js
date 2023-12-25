let unit = prompt ("Введіть ваші одиниці виміру (км, год, кг)");
let value = prompt ("Введіть ваше значення");
let result;

switch (unit) 
{
    case "км":
        console.log ("Результат = ", result = value * 1000, "м");
        break;
    case "год":
        console.log ("Результат = ", result = value * 60, "хв");
        break;
    case "кг":
        console.log ("Результат = ", result = value * 1000, "г");
        break;
    default: 
    alert ("Невідома одиниця вимірювання! Cпробуйте ще раз!"); 
}