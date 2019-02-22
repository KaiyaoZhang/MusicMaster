import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

/* class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.weight = 70;
    }

    speak() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

const lion = new Animal('Simba', 30);
lion.speak();

class Tiger extends Animal {
    constructor(name, age, weight, furColor, speed){
        super(name, age, weight);
        this.furColor = furColor;
        this.speed = speed;
    }

    roar() {
        console.log(`My name is ${this.name} 
        I am ${this.age} years old, 
        and my fur color is ${this.furColor}. 
        What's more I can run with a speed ${this.speed} KM one hour, My weight is ${this.weight}`);
    }
}

const tiger1 = new Tiger('Daoba',34,'','white', 40);
tiger1.roar();
tiger1.speak();

class Leaperd extends Tiger {
    constructor() {
        super();
    }
}

const Leaperd1 = new Tiger('HH', 23, '', 'Pink', 50);
Leaperd1.roar();
Leaperd1.speak();
 */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
