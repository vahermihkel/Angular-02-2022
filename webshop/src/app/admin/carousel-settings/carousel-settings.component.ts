import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel-settings',
  templateUrl: './carousel-settings.component.html',
  styleUrls: ['./carousel-settings.component.css']
})
export class CarouselSettingsComponent implements OnInit {
  images: any[] = [];

  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.carouselService.getFromDatabase().subscribe(images => {
      const newArray = [];
      for (const key in images) {
       newArray.push(images[key]);
      }
      this.images = newArray;
      console.log(this.images);
    })
  }

  onSubmit(form: NgForm) {
    const carouselPicture = {
      url: "https://picsum.photos/id/" + form.value.id + "/900/500",
      header: form.value.header,
      text: form.value.text,
      alt: form.value.alt
    }
    this.carouselService.addToDatabase(carouselPicture).subscribe();
  }

  onDelete(imageUrl: number) {
    const index = this.images.findIndex(element => element.url === imageUrl);
    this.images.splice(index,1);
    this.carouselService.deleteFromDatabase(this.images).subscribe();
  }

}
