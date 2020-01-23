"use strict";
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
//import { deflateRaw } from 'zlib';
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
console.log("HELLO ANGULAR");
// Here all the types of variables you can use
console.log("eeee");
var a; // Un numero qualsiasi (int o float)
var b; // Valore booleano vero o falso
var c; // Stringa
var d; // Qualsiasi tipo
var e = [1, 2, 3]; // Array di numeri (int o float)
var f = [1, true, 'a', false]; // Array di qualsiasi tipo (int e float, caratteri, booleani)
// Costanti
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
// Or we can put all these inside a container
var colors;
(function (colors) {
    colors[colors["Red"] = 0] = "Red";
    colors[colors["Green"] = 1] = "Green";
    colors[colors["Blue"] = 2] = "Blue";
})(colors || (colors = {}));
;
var backgroundColor = colors.Red;
// Example of Class Point
//  interface Point{
//    x: number,
//    y: number,
//    draw: () => void
/* Non c'è bisogno di passare i parametri "x" e "y" all'interno della funzione "draw"
  perchè essendo sia la funzione che i parametri all'interno della stessa interfaccia
  allora questi ultimi sono già visibili dalla funzione stessa
*/
//  }
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        // Controllo se il valore e' minore di 0
        if (value < 0) {
            throw new Error("Valore negativo, inserisci un valore maggiore di 0");
        }
        this.x = value;
    };
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2); // After building constructor
var x = point.getX();
point.setX(10);
point.draw();
/*
let drawPoint = (point: Point) => {

}

let getDistance = (pointA: Point, pointB: Point) => {

}

drawPoint({
  x: 1,
  y: 2
})
*/
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.error(err); });
