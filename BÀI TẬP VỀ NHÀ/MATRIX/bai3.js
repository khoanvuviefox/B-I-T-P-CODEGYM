let size1 = 4;
let size2 = 5;
let matrix = [];
let min = 20;
let max = 60;
for (let i = 0; i < size1; i++) {
    matrix[i] = [];
    for (let j = 0; j < size2; j++) {
        matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
}
console.log(matrix);

let findMatrix = [];
for (i = 0; i < size1; i++) {
    findMatrix[i] = [...matrix[i]]; //clone ma trận
}
let v = 40;
for (i = 0; i < size1; i++) {
    for (j = 0; j < size2; j++) {
        if (findMatrix[i][j] != v) { 
            
        }
    }
}