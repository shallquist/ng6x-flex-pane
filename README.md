# FlexPane
Is a set of Angular directives when used with [@angular/flex-layout](https://github.com/angular/flex-layout) allows the user to resize view components dynamically.  This work was inspired by an [issue](https://github.com/angular/flex-layout/issues/266) raised by [Austin](https://github.com/amcdnl).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Installation
`npm i ng6x-flex-pane`

## Example Usage
```html
<div style="height:900px; width:100%">
  <div fxLayout="column" style="height:100%">
    <!-- Top Panel -->
    <div fxLayout="row" fxFlex="auto">
      <!-- left panel -->
      <ng-container ortFlexPane="row">
        <mat-card fxFlex="30%" ortArea>
          <mat-card-title >
            Left Panel
          </mat-card-title>
        </mat-card>
        <div ortHandle fxLayoutAlign="center center">
          <button style="border:none; outline:none;">||</button>
        </div>      
      </ng-container>

      <!-- right panel -->
      <mat-card fxFlex="auto">
        <mat-card-title >
          Right Panel
        </mat-card-title>
      </mat-card>
    </div>

    <!-- bottom Panel -->
    <ng-container ortFlexPane="column">
      <div ortHandle fxLayoutAlign="center center">
        <button style="border:none; outline:none;"><div style="transform:rotate(90deg)">||</div></button>
      </div>      
    
      <mat-card fxFlex="30%" ortArea>
        <mat-card-title >
          Bottom Panel
        </mat-card-title>
      </mat-card>  
    </ng-container>
  </div>
</div>
```