const canvas1 = document.querySelector('.canvas1');
const canvas2 = document.querySelector('.canvas2');

let blueCircle = canvas1.getContext('2d');
// blueCircle.
// blueCircle.context.strokeStyle='color';
blueCircle.beginPath();
blueCircle.moveTo(102, 79);
blueCircle.lineTo(700, 500);
// blueCircle.lineTo(300, 400);
blueCircle.strokeStyle = 'red';
blueCircle.stroke();
blueCircle.arc(100, 100, 30, Math.PI / 180 * 2, false);
