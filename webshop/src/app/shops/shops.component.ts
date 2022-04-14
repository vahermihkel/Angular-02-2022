import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare let Email: any;
import 'src/assets/smtp.js';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  //shops = [{name: "kristiine", long: 123, lat: 321}]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vahermihkel@gmail.com",
        Password : "A3277E62FC1C2BA12630BF185E0C683BCA52",
        To : 'vahermihkel@gmail.com',
        From : "vahermihkel@gmail.com",
        Subject : "Sulle on saadetud sõnum",
        Body : `Sulle saatis sõnumi ${form.value.name} </br>
        Tema e-mail ${form.value.email} </br>
        Tema telefoninumber ${form.value.phone} </br>
        Tema sõnum: ${form.value.message} </br>`
    }).then(
      (message: any) => alert(message)
    );
  }

}
