import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  username = "";
  password = "";

  constructor() { }

  ngOnInit(): void {
  }

  printValues() {
    console.log("Username: " + this.username);
    console.log("Super secret password: " + this.password);
  }

}
