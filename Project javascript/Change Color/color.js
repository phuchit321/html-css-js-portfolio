document.getElementById('grayButton').onclick = switchGray
document.getElementById('whiteButton').onclick = switchWhite
document.getElementById('blueButton').onclick = switchwBlue
document.getElementById('yellowButton').onclick = switchYellow

function switchGray() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
    document.getElementsByTagName('body')[0].style.Color = 'white';
}

function switchWhite() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'White';
    document.getElementsByTagName('body')[0].style.Color = 'Black';
}

function switchwBlue() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
    document.getElementsByTagName('body')[0].style.Color = 'white';
}

function switchYellow() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
    document.getElementsByTagName('body')[0].style.Color = 'Black';
}