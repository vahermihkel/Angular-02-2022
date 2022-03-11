import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  lisaToode(lisamiseVorm: any) {
    if (lisamiseVorm.valid) {
      // console.log(lisamiseVorm); // NgForm {form: adsd, value: {}, valid: true, invalid: false}
      console.log(lisamiseVorm.value)  // {nimi: "41", hind: 1999}
      // // '[{1},{2}]'  / null
      // const tootedLS = localStorage.getItem("tooted"); // võetakse võti "tooted" abil selle väärtused
      // if (tootedLS) {
      //   // [{1},{2}]
      //   const tootedKorrektselKujul = JSON.parse(tootedLS); // võetakse jutumärgid ära
      //   // [{1},{2},{3}]
      //   tootedKorrektselKujul.push(lisamiseVorm.value);
      //   //võtmega "tooted" lisatakse koma järel olev väärtus LS-sse  // '[{1},{2},{3}]'
      //   localStorage.setItem("tooted",JSON.stringify(tootedKorrektselKujul));
      //   // ---> saadan andmebaasi
      // } else {
      //   const tooted = [];
      //   tooted.push(lisamiseVorm.value);
      //   localStorage.setItem("tooted",JSON.stringify(tooted));
      // }
      this.http.post("https://angular-02-2022-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
          lisamiseVorm.value).subscribe();
      // localStorage.setItem("tooted",JSON.stringify(lisamiseVorm.value));
      lisamiseVorm.reset();
    }
  }

}
