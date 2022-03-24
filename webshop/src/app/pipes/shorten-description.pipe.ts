import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenDescription'
})
export class ShortenDescriptionPipe implements PipeTransform {

  transform(value: string, wordCount: number): string {
    return value.split(" ").slice(0,wordCount).join(" ");
  }

  // 3 esimest sõna jätan alles
  // "Elas metsas mutionu, keset kuuski"
  // string.split(" ") --->
  //  ["Elas", "metsas", "mutionu,", "keset", "kuuski"]

  // .slice(0,3); --> ["Elas", "metsas", "mutionu,"]

  // .join("::") --> Elas::metsas::mutionu,

}
