import { Directive, ElementRef, Optional, Self } from '@angular/core';
import { DefaultFlexDirective } from '@angular/flex-layout';


@Directive({
  selector: '[ortArea]'
})
export class FlexAreaDirective {
  constructor(@Optional() @Self() public flex: DefaultFlexDirective, public elementRef: ElementRef) { }
}
