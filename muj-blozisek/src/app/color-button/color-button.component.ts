import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss']
})
export class ColorButtonComponent {

  possibleColors = ['red', 'blue', 'pink'];
  color = "red";
  colorIndex = 0;

  @Input()
  text = "";

  constructor() { }

  changeColor() {
    this.colorIndex++;
    this.color = this.possibleColors[this.colorIndex % this.possibleColors.length];
  }

}
