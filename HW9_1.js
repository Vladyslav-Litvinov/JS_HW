function myBlend(arr) 
{
    for (let i = arr.length - 1; i >= 0; i--) 
    {
      let j = i + Math.floor(Math.random() * (arr.length - i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
const arr = [2, 1, 5, 8, 7, 6, 3, 4, 9];
myBlend(arr);
console.log(arr);