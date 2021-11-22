const size = 4;
const min = 10;
const max = 40;
let a = [];
let b = [];
for (let i = 0; i < size; i++) {
    a[i] = [];
    b[i] = [];
    for (let j = 0; j < size; j++) {
        a[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
        b[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
}
console.log(a);
console.log(b);

let c = [];
for (i = 0; i < size; i++) {
    c[i] = [];
    for (j = 0; j < size; j++) {
        c[i][j] = a[i][j] + b[i][j];
    }
}
console.log("tổng 2 ma trận:" , c);

let c1 = [];
for (i = 0; i < size; i++) {
    c1[i] = [];
    for (j = 0; j < size; j++) {
        c1[i][j] = a[i][j] * b[i][j];
    }
}
console.log("tích 2 ma trận:" , c1);