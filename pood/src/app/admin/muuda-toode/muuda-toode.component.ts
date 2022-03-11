import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {
  muutmiseVorm: any;
  id = -1;
  private tooted: any[] = [];
  // kooloniga on tüüp
  // võrdusmärgiga on väärtus
  // väärtus on tühi

  // kui on väärtus olemas,
  // siis pole tüüpi vaja,
  // sest ta leiab tüübi väärtuse kaudu

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const tooteNimi = location.href.split("muuda/")[1];

    // const tootedLS = localStorage.getItem("tooted");
    // if (tootedLS) {
    //   this.tooted = JSON.parse(tootedLS);
    //   const toode = this.tooted.find(element => 
    //     element.nimi.replace(" ","-").toLowerCase() === tooteNimi
    //     );
    //   this.id = this.tooted.indexOf(toode); 
    //   this.muutmiseVorm = new FormGroup({
    //     nimi: new FormControl(toode.nimi),
    //     hind: new FormControl(toode.hind),
    //   });
    // }

    this.http.get<any>("https://angular-02-2022-default-rtdb.europe-west1.firebasedatabase.app/tooted.json").subscribe(objektFirebasest => {
      this.tooted = [];
      for (const key in objektFirebasest) {
        this.tooted.push(objektFirebasest[key])     // {nimi: "s", hind: 1};
      }
      const toode = this.tooted.find(element => 
        element.nimi.replace(' ','-').toLowerCase() === tooteNimi);
      this.id = this.tooted.indexOf(toode); 
      this.muutmiseVorm = new FormGroup({
        nimi: new FormControl(toode.nimi),
        hind: new FormControl(toode.hind),
      });
    });

  }

  onMuuda() {
    this.tooted[this.id] = this.muutmiseVorm.value;
    // localStorage.setItem("tooted", JSON.stringify(this.tooted));
    this.http.put("https://angular-02-2022-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
        this.tooted).subscribe();
  }
}
