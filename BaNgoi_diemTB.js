let avg = prompt("Nhập điểm trung bình để tính học lực :", 0);
let kind = "";

kind = (avg > 0 && avg <= 10) ?
    (avg >= 9) ? "XS" :
        (avg >= 8) ? "Gioi" :
            (avg >= 7) ? "Kha" :
                (avg >= 6) ? "TB Kha" :
                    (avg >= 5) ? "TB" :
                        (avg < 5) ? "Yeu" : "Diem nhap vao khong hop le"
: "Diem nhap vao khong hop le";
console.log(kind);