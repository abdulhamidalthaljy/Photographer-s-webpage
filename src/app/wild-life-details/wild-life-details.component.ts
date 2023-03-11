
import { Component, VERSION, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { interimage } from "../interimage";
import { imagesWild } from "../image";
@Component({
  selector: 'app-wild-life-details',
  templateUrl: './wild-life-details.component.html',
  styleUrls: ['./wild-life-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WildLifeDetailsComponent {
  images: Array<interimage> = imagesWild;

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
