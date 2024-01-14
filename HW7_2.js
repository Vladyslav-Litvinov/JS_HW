function pad (str, ch, count, boolean) 
{
    let result = " ";
    let len = str.length;
    if (count > len) {
      result += ch.repeat(count - len);
    } else {
      result += ch.repeat(count);
    }
    if (boolean) {
      result += str;
    } else {
      result = str + result;
    }
  
    return result;
  }

// Щоб отримати результат функції pad в консолі, можна виконати наступний код:
// const str = "qwerty";
// const ch = "+";
// const count = 5;
// const isStart = true;
// const result = pad(str, ch, count, isStart);
// console.log(result); // "+++qwerty"