import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [
    TranslatePipe
  ],
  templateUrl: './footer.html',
  standalone: true,
  styleUrl: './footer.css'
})
export class Footer {
  myName = "Joaquin"
  lastName = "Cuba"
  code = "u201621281"
}
