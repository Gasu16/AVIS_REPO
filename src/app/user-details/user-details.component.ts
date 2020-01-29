import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-details,[app-user-details]',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User; // Il nostro component riceverà dall'esterno l'oggetto con cui valorizzare questa variabile
  constructor() { }

  ngOnInit() {
  }

}
