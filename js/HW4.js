let year = prompt ("Ваш рік?");
if (year <= 0) {
    console.log( year + ": Ваш рік не є дійсним. Спробуйте ще раз ! ");
}
let year_ending;
if (year % 10 === 1 && year % 100 !== 11) {
  year_ending = "рік";
} else if (year % 10 >= 2 && year % 10 <= 4 && (year % 100 < 10 || year % 100 >= 20)) {
  year_ending = "роки";
} else {
  year_ending = "років";
}
console.log ("Вам " +  year +  year_ending);