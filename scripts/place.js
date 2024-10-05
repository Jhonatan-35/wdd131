document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified;document.getElementById("demo").innerHTML = text;

var temp= 38;
var wSpeed= 15;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= windChill;