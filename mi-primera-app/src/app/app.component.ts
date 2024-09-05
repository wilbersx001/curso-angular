import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonasComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Mi primera aplicación en Angular';
  saludo = 'Saludos desde Angular';
}
