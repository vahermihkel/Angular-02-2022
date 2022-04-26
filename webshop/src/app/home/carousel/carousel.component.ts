import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: any[] = [];

  constructor(private config: NgbCarouselConfig,
    private carouselService: CarouselService) { }

  ngOnInit(): void {
    this.carouselService.getFromDatabase().subscribe(images => {
      const newArray = [];
      for (const key in images) {
       newArray.push(images[key]);
      }
      this.images = newArray;
    })
  }

}
