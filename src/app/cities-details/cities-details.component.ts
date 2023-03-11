import { Component, VERSION, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { interimage } from "../interimage";
import { imagesCities } from "../image";
@Component({
  selector: 'app-cities-details',
  templateUrl: './cities-details.component.html',
  styleUrls: ['./cities-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CitiesDetailsComponent {
  images: Array<interimage> = imagesCities;

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
