var Remote = function (code, volume, romochannel1) {
    this.code   =  code;
    this.volume   = volume;
    this.remochanl = romochannel1;

    // Dieu khien kenh
    this.getControlChanel = function () {
        return this.code;

    };
    // Tang am luong
    this.getControlVolumeTang = function () {
        return this.volume  = this.volume + 2;

    };
    //remote chuyển đến kênh 3
    this.remotechanl = function (remochannel3) {
        this.remochannel3 = remochannel3;
        if (this.remochannel3 > 0) {
            alert(" Đây là kênh  số 3 mà bạn chuyển ok, Tận hưởng đi nh!");
        } else {
            alert(" Ôi Không! đây không phải là knh 3 rồi bạn ơi : chọn lại đi nhé!");
        }
    }
};

var Tivi = function (channelnow, statusoffon, remochnel ) {
    this.channelnow = channelnow;
    this.statusoffon = statusoffon;
    this.remochanl = null;

    // Bat tivi
    this.setStatusoffon = function (nhap) {
        this.nhap = nhap;
        if (this.nhap > 0){
            alert("Tivi đã được bật rồi, Tận hưởng đi nha!");
        }else {
            alert(" Tivi Chưa được bật nhập lại số to hơn đi để bật  TVI và tận hưởng đi nha!");
        }
    };

    // Dieu khien den kenh nao donha
    this.remochanls = function () {
        this.remochanl.getControlChanel()

    };
    // Chuyển đến kênh 7
    this.remochanl2 = function (nhapkenh7) {
        this.nhapkenh7 = nhapkenh7;
        alert("This là kênh số 7 mà bạn muốn chuyển : " + this.nhapkenh7);
    }


};


var Tivi = new Tivi(3, 3, 3, 3, 3);
var remote = new Remote( 10, 10 );


function tangamluonglen2donvi(){
    var volume = remote.getControlVolumeTang();
     alert(" Volum hiện tại tivi của bạn là :" + volume + " =>Tăng thêm tí nữa đi xem cho đã đi! " );
}
//Bat tivi
function battivi(){
    alert("Lưu ý : Số lơn hơn (0)  là bật Tivi  and Số nhỏ hơn  (0) là tắt Tivi nhớ nhé ! ok sử dụng đi Tình Yêu.");
    var nhap = prompt(" Nhập số lớn hơn (0) để bật hoặc nhập số  nhỏ hơn (0) để tắt nhé! Tận hưởng đi. ");
    Tivi.setStatusoffon(nhap);
}
// Chuyển đến kênh 7
function chuyendenkenhthu7(){
    var nhapkenh7 = prompt(" Nhập kênh  7 mà bạn  muốn chuyển đi!");
    Tivi.remochanl(nhapkenh7);

}
////remote chuyển đến kênh 3
function remotechannel3(){
    alert("Lưu ý: nếu số 3 không phải là kênh bạn muốn chuyển thì nhập số 0 và thoát đi !");
    var remochannel3 = prompt("Đây là remote chuyển đến kênh 3 : nhập số 3 để chuyển đến knh 3 !");
    remote.remotechanl(remochannel3);
    
}

