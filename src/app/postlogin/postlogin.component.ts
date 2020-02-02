import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostloginService } from '../postlogin.service';
import { Message } from '../message';
@Component({
  selector: 'app-postlogin',
  templateUrl: './postlogin.component.html',
  styleUrls: ['./postlogin.component.css']
})
export class PostloginComponent implements OnInit {

  message: string;

  constructor(private helloWorldService: PostloginService) { }

  ngOnInit() {

    console.log("HelloWorldComponent");
    this.helloWorldService.executePostLoginService().subscribe( (result) => {
      this.message = result.content;
    });
  }
/*
  welcomeMessage = 'Sei stato autenticato!';

  constructor(
    private route: ActivatedRoute,
    private router: Router, private postLOGService: PostloginService) { }

  ngOnInit() {
    this.postLOGService.executePostLoginService().subscribe((res) =>{
      this.welcomeMessage = res.content;
    });

  }*/
}
