import { Component,Input , EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world',
  imports: [CommonModule],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent {
  @Input() countryDetails:any;

  @Output() regionSelected = new EventEmitter<string>(); // Emit selected country code


  onMouseOver(event:MouseEvent):void {
    const target = event.target as SVGElement; //get elemtnthat triggered the event

    if (target.tagName === 'path') {
      const regionName = target.getAttribute('name');
      if (regionName) {
        console.log(`Hovered over: ${regionName}`);

  
        if(!target.getAttribute('data-orginal-color')){
          const currentColor = target.style.fill || 'black'; 
          target.setAttribute('data-orginal-color', currentColor);//save orginal color
        }
        target.style.fill = 'yellow'; //highlight region
      }
    }
  }

  onPathClick(event:MouseEvent): void {
    const target = event.target as SVGElement;

    if (target.tagName === 'path'){
      const countryCode = target.getAttribute('id');//get countrycode(2-letter ISO code)
      if (countryCode) {
        console.log(`Clicked on: ${countryCode}`);
        this.regionSelected.emit(countryCode); //call API to fetch country details
      }
    }
  }

  onMouseOut(event: MouseEvent): void{
    const target = event.target as SVGAElement;

    if (target.tagName === 'path') {
      const originalColor = target.getAttribute('data-orginal-color');
      if (originalColor) {
        target.style.fill = originalColor;
      }
    }
  }

}
