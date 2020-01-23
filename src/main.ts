
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import { deflateRaw } from 'zlib';

if (environment.production) {
  enableProdMode();
}

import {Esempio} from './toImport'

console.log("HELLO ANGULAR");
// Here all the types of variables you can use
console.log("eeee");
let a: number; // Un numero qualsiasi (int o float)
let b: boolean; // Valore booleano vero o falso
let c: string; // Stringa
let d: any; // Qualsiasi tipo
let e: number[] = [1, 2, 3]; // Array di numeri (int o float)
let f: any[] = [1, true, 'a', false]; // Array di qualsiasi tipo (int e float, caratteri, booleani)

// Costanti
const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

// Or we can put all these inside a container
enum colors {Red = 0, Green = 1, Blue = 2};
let backgroundColor = colors.Red;

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


class Point{

  constructor(private x?: number, private y?:number){ // "?" significa parametri opzionali
  }

  getX(){
    return this.x;
  }
  
  setX(value){
    // Controllo se il valore e' minore di 0
    if(value < 0){
      throw new Error("Valore negativo, inserisci un valore maggiore di 0");
    }
    this.x = value;
  }

  draw(){
    console.log('X: ' + this.x + 'Y: ' + this.y);
  }

/*  getDistance(another: Point){

  }*/
}

let point = new Point(1, 2); // After building constructor
let x = point.getX();
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

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
