import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webshop';

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem("language");
    if (lang && (lang === "ee" || lang === "en")) { // true && true
      translate.setDefaultLang(lang);
    } else {
      translate.setDefaultLang("ee");
      localStorage.setItem("language", "ee");
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }
}
