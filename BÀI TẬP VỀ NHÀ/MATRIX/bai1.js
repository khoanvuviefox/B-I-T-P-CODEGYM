// const size = 4;
let size = 5;
const min = 10;
const max = 90;
let matrix = [];
for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
        matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
}
// console.log(matrix);
let show = "";
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        show += `${matrix[i][j]} &nbsp;&nbsp;`;
    }
    show += "<br>";
}
document.write(show);
document.write('<br>');

//tổng các số chẵn trong matrix
let total = 0;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (matrix[i][j] % 2 == 0) {
            total += matrix[i][j];
        }
    }
}
// console.log('tổng các số chẵn', total);
document.write('tổng các số chẵn: ', total);
document.write('<br>');

// tổng các giá trị trên đường chéo chính
let total2 = 0;
// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if(i == j){
//             total2 += matrix[i][j];
//         }
//     }
// }
for (let i = 0; i < size; i++) {
    total2 += matrix[i][i];
}
// console.log('đường chéo chính', total2);
document.write('đường chéo chính: ', total2);
document.write('<br>');

// tổng giá trị trên đường chéo phụ
let total3 = 0;
// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if(i == size - j - 1){
//             total3 += matrix[i][j];
//         }
//     }
// }
for (let i = 0; i < size; i++) {
    total3 += matrix[i][size - i - 1];
}
// console.log('tổng giá trị trên đường chéo phụ', total3);
document.write('tổng giá trị trên đường chéo phụ: ', total3);
document.write('<br>');

//  tính tổng các giá trị trên đường biên
let totalBorder = 0;
let totalMatrix = 0;
let totalSubMatrix = 0;
// for (let j = 0; j < size; j++) {
//     totalBorder += matrix[0][j];
//     totalBorder += matrix[size - 1][j];
// }
// for (let i = 1; i < size - 1; i++) {
//     totalBorder += matrix[i][0];
//     totalBorder += matrix[i][size - 1];
// }

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        totalMatrix += matrix[i][j];
    }
}

for (let i = 1; i < size - 1; i++) {
    for (let j = 1; j < size - 1; j++) {
        totalSubMatrix += matrix[i][j];
    }
}
totalBorder = totalMatrix - totalSubMatrix;
// console.log('Tổng giá trị trên đường biên', totalBorder);
document.write('Tổng giá trị trên đường biên: ', totalBorder);
document.write('<br>');

//Ma trận tam giác dưới 
let matrixTemp = [];
for (let i = 0; i < size; i++) {
    matrixTemp[i] = [...matrix[i]]; // toán tử spread operator
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (j > i) {
            matrixTemp[i][j] = '';
        }
    }
}
// console.log(matrixTemp);
// document.write(matrixTemp);
show = "";
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        show += `${matrixTemp[i][j]} &nbsp;&nbsp;`;
    }
    show += "<br>";
}
document.write(show);
//Ma trận tam giác trên
let matrixTemp2 = [];
for (let i = 0; i < size; i++) {
    matrixTemp2[i] = [...matrix[i]]; // toán tử spread operator, dùng để copy mảng
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (j < i) {
            matrixTemp2[i][j] = '';
        }
    }
}
// console.log(matrixTemp2);
// document.write(matrixTemp2);
document.write("<br>");
show = "";
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        show += `${matrixTemp2[i][j] != '' ? matrixTemp2[i][j] : "&nbsp;&nbsp;&nbsp;&nbsp;"} &nbsp;&nbsp;`;
    }
    show += "<br>";
}
document.write(show);
