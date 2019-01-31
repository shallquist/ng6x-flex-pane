import { Directive, Input, ContentChild } from '@angular/core';
import { FlexHandleDirective } from './flex-handle.directive';
import { FlexAreaDirective } from './flex-area.directive';

@Directive({
  selector: '[ortFlexPane]'
})
export class FlexPaneDirective {
  @Input('ortFlexPane') direction: string = 'row';

  @ContentChild(FlexHandleDirective) handle: FlexHandleDirective;
  @ContentChild(FlexAreaDirective) area: FlexAreaDirective;

  constructor() { }

  ngOnInit() {
    this.handle.drag.subscribe(pos => this.onDrag(pos));
  }

  onDrag({ x, y }): void {
    let handleRef = this.handle.elementRef.nativeElement;
    let elRef = this.area.elementRef.nativeElement;
    let isRow = this.direction === 'row';

    const maxValue  = isRow ? window.innerWidth - handleRef.offsetWidth - 10 : window.innerHeight - handleRef.offsetHeight - 10;
    const initValue = isRow ? elRef.clientWidth : elRef.clientHeight;
    const delta     = isRow ? x : -y;

    const newValue = Math.min(initValue + delta, maxValue);

    this.area.flex.activatedValue = `${newValue}px`;
  }
}
