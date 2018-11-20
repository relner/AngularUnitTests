import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {

  @Output() changes = new EventEmitter<number>();
  private counter = 0;

  @HostListener('click') onclick() {
    this.counter++;
    this.changes.emit(this.counter);
  }

}
