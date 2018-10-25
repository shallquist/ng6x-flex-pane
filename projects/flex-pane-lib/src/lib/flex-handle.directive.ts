import { Directive, Output, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { takeUntil, map, switchMapTo } from 'rxjs/operators'

@Directive({
  selector: '[ortHandle]'
})
export class FlexHandleDirective {
  @Output() drag: Observable<{ x: number, y: number }>;

  constructor(ref: ElementRef) {
    this.drag = fromEvent(ref.nativeElement, 'mousedown').pipe(
      // tap(_ => console.log("mouse down")),
      switchMapTo(
        fromEvent(document, 'mousemove').pipe(
          // tap( (event: MouseEvent) => console.log(`x:${event.layerX} y:${event.layerY}`)),
          map((event: MouseEvent) => ({ x: event.movementX, y: event.movementY })),
          takeUntil(fromEvent(document, 'mouseup'))
        )
      )
    )
  }
}
