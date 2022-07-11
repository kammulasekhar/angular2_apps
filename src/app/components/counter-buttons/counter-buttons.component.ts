import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  @Output() incrementCounter = new EventEmitter();
  @Output() decrementCounter = new EventEmitter();
  @Output() resetCounter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.incrementCounter.emit()
  }

  decrement(){
    this.decrementCounter.emit();
  }

  reset(){
    this.resetCounter.emit()
  }
}
