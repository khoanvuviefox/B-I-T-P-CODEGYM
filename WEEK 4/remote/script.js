let Television = function (remoteCode) {
    this.tvProgram = 1;
    this.remoteCode = remoteCode;
    this.volume = 20;
    this.isOn = false;
    this.checkIsOn = function () {
        if (this.isOn) {
            console.log("tv is on");
        } else {
            console.log("tv is off")
        }
    };
    this.turn = function () {
        if (this.isOn) {
            this.isOn = false;
            console.log("turn off the tv");
        } else {
            this.isOn = true;
            console.log("turn on the tv");
        }
    };
    this.adjustVol = function (number) {
        if (this.isOn) {
            number = Number(number);
            this.volume += number;
            console.log("âm lượng: " + this.volume);
        }
        else {
            console.log("tv đang tắt !");
        }
    };
    this.adjustTVProgram = function (number) {
        if (this.isOn) {
            number = Number(number);
            this.tvProgram = number;
            console.log("tv chuyển sang kênh " + this.tvProgram);
        }
        else {
            console.log("tv đang tắt !");
        }
    };
};
let Remote = function (remoteCode) {
    this.remoteCode = remoteCode;
    this.turnVolume = function (tv, number) {
        if (tv.remoteCode === this.remoteCode) {
            tv.adjustVol(number);
        }
    };
    this.turnTVProgram = function (tv, number) {
        if (this.remoteCode === tv.remoteCode) {
            tv.adjustTVProgram(number);
        }
    };
    this.turnOnOff = function (tv) {
        if (this.remoteCode === tv.remoteCode) {
            tv.turn();
        }
    }
};


let sony = new Television(10112);
console.log(sony);
sony.turn();
sony.adjustTVProgram(7);


let sonyRemote = new Remote(10112);
sonyRemote.turnTVProgram(sony, 3);
sonyRemote.turnVolume(sony, 2);
sonyRemote.turnOnOff(sony);



