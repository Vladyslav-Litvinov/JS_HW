"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
buttonSubmit.addEventListener('click',payFine);
function payFine(){
    const searchResult = DB.find(currentFine => currentFine.номер === fineNumber.value)
    if (!searchResult) {
        alert("Номер не співпадає");
        return;
}
    if (searchResult.сума !== Number(amount.value)) {
        alert("Сума не співпадає");
        return;
    }
    const passportDataRegex = /^[А-ЯІЇЄ]{2}\d{6}$/;
    if (!passportDataRegex.test(passport.value)) {
        alert("Не вірний паспортний номер");
        return;
    }
    if (isNaN(creditCardNumber.value) || creditCardNumber.value.length !== 16) {
        alert("Не вірна кредитна картка");
        return;
    }
    if (isNaN(cvv.value) || cvv.value.length !== 3) {
        alert("Не вірний cvv");
        return;
    }
    alert("Оплата пройшла успiшно!")
    data.finesData = DB.filter(currentFine => currentFine.номер !== searchResult.номер);
}
