let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}
console.log('Cумма чисел які не кратні 3 від 1 до 100', sum);