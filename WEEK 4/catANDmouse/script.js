var Mouse = function (name, mouseweight, mousespeed, mouselife ) {
    //Thuoc Tinh.

    this.Name = name;
    this.mouseweight =  mouseweight;
    this.MouseSpeed = mousespeed;
    this.mouselife =  mouselife;


    // Mouse said

    this.MouseSaid = function () {
        alert(" Ta Là Chuột Ta Kêu : chitchit ^^!");
    };
    // MouseInformation

    this.MouseInformation = function () {
        alert(" Luu y : Trang thai cua Mouse : true = live & flase = die");
        document.write(" Name La : " + this.Name );
        document.write(" Weight of Mouse la : " + this.mouseweight + "Kg");
        document.write(" Speed la : " + this.MouseSpeed + "s");
        document.write(" Status of Mouse la : " + this.mouselife);
    };

    // eatMouse
    this.getmouselife = function () {
            this.mouselife = this.mouselife - 1;
            return this.mouselife;
    };

    this.GetMouseSpeed = function () {
        return this.MouseSpeed;
    };

};
var  Cat = function (namecat, catweight, catspeed, Mouse) {
    //Thuoc tinh.
    this.NameCat = namecat;
    this.Catweight = catweight;
    this.CatSpeed = catspeed;
    this.setMouse = Mouse;


    //CatInformation
    this.CatInformation = function () {
        document.write(" Name La : " + this.NameCat);
        document.write(" Weight of Cat la : " + this.Catweight + "Kg");
        document.write(" Status of Cat la : " + this.CatSpeed + "s");
    };
    // Cat said
    this.CatSaid = function () {
        alert(" Ta Là  Mèo  Ta Keu : meomeo ^^!");
    };

    // An thit Mouse
    this.EatMouse = function () {
         if (this.setMouse.getmouselife() > 0){
             this.Catweight = this.Catweight+1;
            return " Đã ăn một con Mouse and cân nặng của Cat hiện tại là : "+this.Catweight;
         }else {
             return 'Ko';
         }
    }
    //san mouse
    this.CatchMouse = function () {
        if (this.CatSpeed >this.setMouse.GetMouseSpeed()){
            alert('Bạn đã bắt được 01 con chuột! bắt lại đi nha.')
        }
    }
};

//Mouse Said.
var mouse = new Mouse("Mouse", 100, 100, 100 );
var cat = new Cat("Cat", 100, 200, mouse);

function main() {
    mouse.MouseSaid();
}

function main2() {
    cat.CatSaid();
}

function main3() {
    mouse.MouseInformation();
}

function main4() {
    cat.CatInformation();
}

function main5() {
   var a = console.log(cat.EatMouse());
}

function main6() {
    cat.CatchMouse();

}