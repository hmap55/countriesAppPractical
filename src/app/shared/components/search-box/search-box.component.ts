import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy{



  private debouncer: Subject<string> = new Subject<string>();
  @Input()
  public initialValue:string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();


  @Input()
  public placeholder!:string;

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(600)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe;
  }

  getValue(term:string):void{
    this.onValue.emit(term);
  }

  onKeyPress(searchTerm: string):void{
    this.debouncer.next(searchTerm);
  }



}
