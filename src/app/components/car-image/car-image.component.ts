import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';


@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImages: CarImage[] = [];
  currentImage: CarImage;
  carDetails:CarDetails[] = [];
  imageUrl = "https://localhost:5001"
  constructor(private carImageService: CarImageService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarImagesByCarId(params["carId"])
      }
    })
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getByCarId(carId).subscribe(response => {
      this.carImages = response.data;
    })
  }

  getCurrentImageClass(image: CarImage) {
    if (this.carImages[0] == image) {
      return 'carousel-item active';
    } else {
      return 'carousel-item ';
    }
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCarImage(carImage:CarImage, carId: number){
    if (carImage.carId == 0) {
      let path = this.imageUrl + "/images/carDefault.png"
      return path;

    }
    else{
      let path = this.imageUrl + carImage.imagePath;
      return path;
    }
  }
}
