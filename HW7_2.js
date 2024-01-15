function pad (str, ch, count, boolean) 
{
    let result = "";
    let len = str.length;
    if (count > len) {
      result += ch.repeat(count - len);
    } 
    if (boolean) {
      result += str;
    } else {
      result = str + result;
    }
  
    return result;
  }
const str = "qwerty";
const ch = "+";
const count = 6;
const boolean = true;
const result = pad(str, ch, count, boolean);
console.log(result);