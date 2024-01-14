// Варіант 1
let height = 5;
let symbol = '*';
for(let i = 1; i <= height; i++) 
{
    let line = '';
    for(let j = 0; j < i; j++) 
    {
        line += symbol;
    }
    console.log(line);
}

// Варіант 2
let height = 5;
let symbol = '*';

for(let i = 1; i <= height; i++) {
    console.log(symbol.repeat(i));
}