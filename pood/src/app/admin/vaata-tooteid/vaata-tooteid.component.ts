import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {
  tooted: any[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const tootedLS = localStorage.getItem("tooted");
    // if (tootedLS) {
    //   this.tooted = JSON.parse(tootedLS);
    // }
    this.http.get<any>("https://angular-02-2022-default-rtdb.europe-west1.firebasedatabase.app/tooted.json").subscribe(objektFirebasest => {
      for (const key in objektFirebasest) {
        this.tooted.push(objektFirebasest[key])     // {nimi: "s", hind: 1};
      }
    });
  }

  kustuta(toode: any) {
    const j2rjekorraNumber = this.tooted.indexOf(toode);
    this.tooted.splice(j2rjekorraNumber,1);
    // localStorage.setItem("tooted", JSON.stringify(this.tooted));
    // järjekorranumber    .indexOf()  <- toode
    // kustutada           .splice()   <- index
    this.http.put("https://angular-02-2022-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
        this.tooted).subscribe();
  }
}

// POST - lisab ühe juurde  <-- kohustuslik BODY
// GET - võtab kõik
// PUT - asendab kõik ära kes seal enne olid sellega mis saadan   <-- kohustuslik BODY
