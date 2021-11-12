let avg = 10;
let kind = "";

kind = (avg > 0 && avg <= 10) ?
    (avg >= 9) ? "Xuất Sắc" :
        (avg >= 8) ? "Giỏi" :
            (avg >= 7) ? "Khá" :
                (avg >= 6) ? "Trung bình khá" :
                    (avg >= 5) ? "Trung bình" :
                        (avg < 5) ? "Yếu" : "Điểm không hợp lệ"
: "Điểm không hợp lệ";
console.log(kind);
