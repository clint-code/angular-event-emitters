import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input() item = '';

  /**
   * @Output() - this decorator function marks the property as a wayb for data to go from the  child to the 
   * parent
   * 
   * newItemEvent - the name of the @Output()
   * 
   * EventEmitter<string> - the @Output()'s type
   * 
   * new EventEmitter<string>() - Tells Angular to create a new event emitter 
   * and that the data it emits is of type string.
   */

  @Output() newItemEvent = new EventEmitter<string>();


  constructor() { }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    console.log(value);
  }

  ngOnInit(): void {

  }

}
