import { NgModule } from '@angular/core';
import { FlexPaneDirective } from './flex-pane.directive';
import { FlexHandleDirective } from './flex-handle.directive';
import { FlexAreaDirective } from './flex-area.directive';

@NgModule({
  imports: [
  ],
  declarations: [FlexPaneDirective, FlexHandleDirective, FlexAreaDirective],
  exports: [FlexPaneDirective, FlexHandleDirective, FlexAreaDirective]
})
export class FlexPaneLibModule { }
