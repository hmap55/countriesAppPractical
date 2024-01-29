import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder!:string;

  getValue(term:string):void{
    this.onValue.emit(term);
  }
}
