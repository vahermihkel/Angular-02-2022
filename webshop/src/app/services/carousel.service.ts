import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private url = "https://webshop-02-2022-93e65-default-rtdb.europe-west1.firebasedatabase.app/carouselImages.json";

  constructor(private http: HttpClient) { }

  addToDatabase(image: any) {
    return this.http.post(this.url, image);
  }

  getFromDatabase() {
    return this.http.get<any>(this.url);
  }

  deleteFromDatabase(images: any[]) {
    return this.http.put(this.url, images);
  }
}
