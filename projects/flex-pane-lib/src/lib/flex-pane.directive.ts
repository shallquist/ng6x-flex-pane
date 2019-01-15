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
    let elRef = this.area.elementRef.nativeElement;
    const initValue = this.direction === 'row' ? elRef.clientWidth : elRef.clientHeight;
    const delta     = this.direction === 'row' ? x : -y;

    const newValue = initValue + delta;

    this.area.flex.activatedValue = `${newValue}px`;
  }
}
