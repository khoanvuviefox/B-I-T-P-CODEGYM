var SwitchButton = function () {
    this.status = false;
    this.lamp = null;
    this.connectToLamp = function () {
        if (this.status == true) {
            alert("Connected!!!");
        } else {
            alert("Not Connected!!!");
        }
    };
    this.switchOn = function () {
        this.status = true;
        alert("Switched On <3");
    };
    this.switchOff = function () {
        this.status = false;
        alert("Switched Off");
    }
};
var ElectricLamp = function () {
    this.statuss = false;
    this.turnOns = function () {
        this.statuss = true;
        alert("Light Bulb Turned On <3");
    };
    this.turnOffs = function () {
        this.statuss = false;
        alert("Light Bulb Off");
    }
};
var congtac = new SwitchButton();
var bongden = new ElectricLamp();
bongden(congtac);
function on() {
    bongden.turnOns(congtac.switchOn());
}
function off() {
    bongden.turnOffs(congtac.switchOff());
}
function connection() {
    congtac.connectToLamp();
}