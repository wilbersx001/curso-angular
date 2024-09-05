import { Component } from "@angular/core";

@Component({
    selector:'app-personas',
    templateUrl:'./personas.component.html',
    standalone: true
})    

export class PersonasComponent{
    title = 'Componente personas';
      saludo = 'Holaaaa'
}