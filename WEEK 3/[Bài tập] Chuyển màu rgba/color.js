changeRGBA();
function changeRGBA() {
    var red, green, blue, alpha, col;
    red = document.getElementById('slideR').value;
    green = document.getElementById('slideG').value;
    blue = document.getElementById('slideB').value;
    alpha = document.getElementById('slideA').value;
    col = ("rgb(" + red + "," + green + "," + blue + "," + alpha + ")");
    document.getElementById('vR').innerHTML = red;
    document.getElementById('vG').innerHTML = green;
    document.getElementById('vB').innerHTML = blue;
    document.getElementById('vA').innerHTML = alpha;
    document.getElementById('colorPreview').style.backgroundColor = col;
    document.getElementById('rgbaText').innerHTML = col;
}