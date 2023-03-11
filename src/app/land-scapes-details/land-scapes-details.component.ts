
import { Component, VERSION, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { interimage } from "../interimage";
import { imagesLand } from "../image";
@Component({
  selector: 'app-land-scapes-details',
  templateUrl: './land-scapes-details.component.html',
  styleUrls: ['./land-scapes-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandScapesDetailsComponent {
  images: Array<interimage> = imagesLand;

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
