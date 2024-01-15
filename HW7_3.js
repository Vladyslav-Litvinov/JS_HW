function checkProbabilityTheory(count) {
    let even = 0;
    let odd = 0;
  
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 901) + 100;
      if (randomNumber % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  
    const percentage = (even / (even + odd)) * 100;
  
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${even}`);
    console.log(`Не парних чисел: ${odd}`);
    console.log(`Відсоток парних до не парних: ${percentage}%`);
  }
  
  checkProbabilityTheory(10);// Для введення будь-яких значень