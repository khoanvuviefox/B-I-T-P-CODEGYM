const size = 4;
const min = 10;
const max = 40;
let matrix = [];
for (let i = 0; i<size;i++) {
    matrix[i] = [];
    for (let j = 0; j<size;j++) {
        matrix[i][j] = Math.floor(Math.random()*(max - min +1)+min);
    }
}
console.log(matrix);

// Tổng hai số chẵn
let total = 0;
for (let i = 0; i<size;i++){
    for (let j = 0; j<size;j++){
        if (matrix[i][j] % 2 ==0){
            total += matrix[i][j];
        }
    }
}
console.log("tổng 2 số chẵn:" + total);

// Tổng 2 đường chéo chính