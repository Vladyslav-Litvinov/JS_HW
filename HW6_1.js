function drawTriagle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += symbol;
        }
        console.log(line);
    }
}
drawTriagle(5, '*');