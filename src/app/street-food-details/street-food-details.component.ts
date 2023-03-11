
import { Component, VERSION, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { interimage } from "../interimage";
import { imagesFood } from "../image";
@Component({
  selector: 'app-street-food-details',
  templateUrl: './street-food-details.component.html',
  styleUrls: ['./street-food-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StreetFoodDetailsComponent {
  images: Array<interimage> = imagesFood;

  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
