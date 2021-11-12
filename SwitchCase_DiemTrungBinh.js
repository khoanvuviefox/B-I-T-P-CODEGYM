let avg = 10;
        let avgType = "";
        let kind = "";
        let isXS = isGioi = isKha = isTBK = isTB = isYeu = false;
        if(avg > 0 && avg <= 10){

            avgType = (avg >= 9) ? "isXS" :
                        (avg >= 8) ? "isGioi" :
                            (avg >= 7) ? "isKha" :
                                (avg >= 6) ? "isTBK" :
                                    (avg >= 5) ? "isTB" :
                                        (avg < 5) ? "isYeu" : "Diem nhap vao khong hop le";

        }else{
            avgType = kind = "Diem nhap vao khong hop le";
        }


        switch(avgType){
            case('isXS'):
                kind = "Xuất sắc";
                break;
            case('isGioi'):
                kind = "Giỏi";
                break;
            case('isKha'):
                kind = "Khá";
                break;
            case('isTBK'):
                kind = "Trung bình khá";
                break;
            case('isTB'):
                kind = "Trung bình";
                break;
            case('isYeu'):
                kind = "Yếu";
                break;

            default:
                kind = "Điểm không hợp lệ";
        }
        console.log(kind);
