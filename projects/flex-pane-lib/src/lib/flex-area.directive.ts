import { Directive, ElementRef, Optional, Self } from '@angular/core';
import { FlexDirective } from '@angular/flex-layout';


@Directive({
  selector: '[ortArea]'
})
export class FlexAreaDirective {
  constructor(@Optional() @Self() public flex: FlexDirective, public elementRef: ElementRef) { }
}
