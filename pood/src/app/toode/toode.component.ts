import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toode',
  templateUrl: './toode.component.html',
  styleUrls: ['./toode.component.css']
})
export class ToodeComponent implements OnInit {
  // klassimuutuja     <-   this.
  toode: any = {};   // HTML-s näitame

  constructor(private http: HttpClient) { }

        // vorm
  ngOnInit(): void {
        // "localhost:8080/toode/coca-cola"
    console.log(location.href);
        // "Elas metsas mutionu".split("a");
        // ["El", "s mets", "s mutionu"];
        // index - 0            index - 1
        // ["localhost:8080/", "coca-cola"]
    console.log(location.href.split("toode/"));
    console.log(location.href.split("toode/")[1]);

    // const muutuja      let muutuja

    // "coca-cola"
    const tooteNimi = location.href.split("toode/")[1];

    // kõik tooted üles

    // '[{nimi: "Fanta",h: 1}, {nimi: "Coca cola", h: 2}, {nimi: "Coca cola", h: 3}]'
    // const tootedLS = localStorage.getItem("tooted");
    // if (tootedLS) {  // kas on null või reaalne väärtus
    //   const tooted: any[] = JSON.parse(tootedLS); //[{nimi: "Fanta",h: 1}, {nimi: "Coca cola", h: 2}, {nimi: "Coca cola", h: 3}]
    //               //[{1},{2}].find()
    //               // .find() käib läbi senikaua massiivi/listi/array'd kuni ta leiab õige matchi
    //               //  [].find({nimi: "Fanta",h: 1} => "fanta" === "coca-cola") --- false
    //               //  [].find({nimi: "Coca cola", h: 2} => "coca-cola" === "coca-cola" ) --- true 
    //   this.toode = tooted.find(element => 
    //     element.nimi.replace(' ','-').toLowerCase() === tooteNimi);
    //   console.log(this.toode);
      this.http.get<any>("https://angular-02-2022-default-rtdb.europe-west1.firebasedatabase.app/tooted.json").subscribe(objektFirebasest => {
        const tooted = [];
        for (const key in objektFirebasest) {
          tooted.push(objektFirebasest[key])     // {nimi: "s", hind: 1};
        }
        this.toode = tooted.find(element => 
          element.nimi.replace(' ','-').toLowerCase() === tooteNimi);
      });
    }

    // otsin sellise nimega toote üles .find()

}
