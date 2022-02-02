//Erstelle eine js-Datei die den script-tag in main.html erstetzt

document.body.style.margin = 0;

var c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;

var g = c.getContext("2d");

var R = new Rectangle(10,10,100,100,Color.RGB(255,0,0,0.5));

R.fill();