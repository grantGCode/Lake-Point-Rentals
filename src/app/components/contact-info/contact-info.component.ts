import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {
  owner = 'Grant Bentley';
  phoneNum = '(832)494-7590';
  email = 'gbentley0618@gmail.com'

}
