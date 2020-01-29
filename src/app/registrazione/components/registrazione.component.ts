import { Component, OnInit } from '@angular/core';
import { RegistrazioneService } from '../services/registrazione.service';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  appreg;
  constructor(
    private regserv: RegistrazioneService,
    private httpclientservice: HttpClientService
    ) { }


  ngOnInit() {
  }

}
