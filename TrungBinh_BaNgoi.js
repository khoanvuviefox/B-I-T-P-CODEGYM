let avg = prompt("Nhập điểm trung bình để tính học lực :", 0);
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
                kind = "XS";
                break;
            case('isGioi'):
                kind = "Gioi";
                break;
            case('isKha'):
                kind = "Kha";
                break;
            case('isTBK'):
                kind = "TBK";
                break;
            case('isTB'):
                kind = "TB";
                break;
            case('isYeu'):
                kind = "Yeu";
                break;

            default:
                kind = "Diem nhap vao khong hop le";
        }
        console.log(kind);