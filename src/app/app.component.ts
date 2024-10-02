import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nuevoPortafolio';


  selectedOption: string = 'about';


  selectOption(option: string) {
    this.selectedOption = option;
  }

}
