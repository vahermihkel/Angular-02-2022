import { Component, OnInit } from '@angular/core';

@Component({ // imporditakse node_modules seest ja saab kõik componendile vajalikud omadused
  selector: 'app-ostukorv', // võtan selectori abil componendi kasutusele <app-ostukorv></app-ostukorv>
  templateUrl: './ostukorv.component.html', // seotakse HTML fail, mida on iga kord täpselt 1,
      // ka mitut .ts faili ei saa ühte HTMLi siduda; alati on 1===1 -le seos
  styleUrls: ['./ostukorv.component.css'] // siit seotakse CSS fail, mida võib ka olla mitu tk
}) // [] - tähistavad massiivi-listi-array   
// {} - tähistavad objekti - võti-väärtus paaride kogumik või funktsiooni/classi algust ja lõppu
//   () - parameetrite vastu võtmiseks, kui seda välja kutsun, siis annan midagi kaasa
export class OstukorvComponent implements OnInit { // export - et oleks võimalik importida
  // nt importisime app-routing failis luues seoseid path:"" ja component:C vahel
  // class - tähistab funktsioonide ja muutujate kogumit
  // OstukorvComponent - tekib genereerides (ng generate component ostukorv)
  // implements OnInit --- OnInit on imporditud node_modules kaustast ja annab mingit lisaomadust
  //      et ei saaks kustutada ega muuta ngOnInit funktsiooni

  constructor() { 
    console.log("OstukorvComponent constructor käivitub");
  } // erinevate koodilõikude ühendamiseks node_modules kaustast
  // kui luuakse Component, siis ühendatakse mingid teatud failid mis on siia sisse pandud
  // loomise moment on kui URL peale satutakse

  ngOnInit(): void { // ngOnInit - käimaminemise funktsioon
    // käimaminemise moment on kui URL peale satutakse
    // funktsioon, mis on loogelisest sulust loogelise suluni
    // näen kust ta algab ja lõppeb kui vajutan ühe loogelise sulu peale ja tekib mõlema
          // ümber kast
    console.log("OstukorvComponent ngOnInit käivitub");
  }

} // kõikidele loogeliste, kandilistele ja ümaratele sulgudele on vaja programmeerimsies
// paarilist. ei tohi olla nii, et läheb sulg lahti aga ei lähe kinni {} () []
// HTMLs: <div></div> <button></button>  erijuhud: <img />  <input />
