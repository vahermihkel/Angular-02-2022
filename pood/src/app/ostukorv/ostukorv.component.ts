import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  tooted: any[] = [];
  ostukorviKogusumma = 0; 
  // neid muutujaid näidatakse HTML-s

  constructor(private http: HttpClient) { }

  ngOnInit(): void { // siis kui componendi sisse tullakse
    const ostukorvStoragest = sessionStorage.getItem("ostukorv");
    if (ostukorvStoragest) {
      this.tooted = JSON.parse(ostukorvStoragest);
    }
    this.kalkuleeriOstukorviSumma();
  }

  // tavalised sulud funktsiooni nime järel
  // on väärtuste vastu võtmiseks
  tyhjenda() {
    this.tooted = [];
    sessionStorage.setItem("ostukorv",JSON.stringify(this.tooted));
    this.kalkuleeriOstukorviSumma();
  }

  lisaToode(toode: any) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    this.tooted.push(toode);
    sessionStorage.setItem("ostukorv",JSON.stringify(this.tooted));
    this.kalkuleeriOstukorviSumma();
  }

  kustutaToode(toode: any) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    // järjekorranumber üles leida
    const j2rjekorraNumber = this.tooted.indexOf(toode);
    console.log(j2rjekorraNumber);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // kustutada järjekorranumbri alusel
    this.tooted.splice(j2rjekorraNumber,1);
    sessionStorage.setItem("ostukorv",JSON.stringify(this.tooted));
    this.kalkuleeriOstukorviSumma();
  }

  private kalkuleeriOstukorviSumma() {
    this.ostukorviKogusumma = 0;
    this.tooted.forEach(element => 
      this.ostukorviKogusumma = this.ostukorviKogusumma + element.hind);
  }

  maksma() {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const data = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": this.ostukorviKogusumma,
      "order_reference": Math.ceil(Math.random()*999999),
      "nonce": "92ddcfab96e34a5f" + Math.ceil(Math.random()*999999) + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://www.postimees.ee"
      }
    const headers = {
      headers: new HttpHeaders(
        {
          "Authorization": 
          "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
        }
      )
    }  
    
    this.http.post<any>(url, data, headers).subscribe(res =>
        location.href = res.payment_link
      );
  }

}
