import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldComponent } from "./world/world.component";

@Component({
  selector: 'app-root',
  imports: [WorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'd280-app';
}
