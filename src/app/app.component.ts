import { Component } from '@angular/core';
import { FreudMenuItem, GalleryPhoto } from '@freud-ds/web-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'freud-ds-example';
  component: string = 'home';
  images: GalleryPhoto[] = [
    {
      "previewImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria1.jpg",
      "thumbnailImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria1.jpg",
      "alt": "Image 1",
      "title": "Title 1"
    },
    {
      "previewImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria2.jpg",
      "thumbnailImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria2.jpg",
      "alt": "Image 2",
      "title": "Title 2"
    },
    {
      "previewImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria3.jpg",
      "thumbnailImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria3.jpg",
      "alt": "Image 3",
      "title": "Title 3"
    },
    {
      "previewImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria4.jpg",
      "thumbnailImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria4.jpg",
      "alt": "Image 4",
      "title": "Title 4"
    },
    {
      "previewImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria5.jpg",
      "thumbnailImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria5.jpg",
      "alt": "Image 5",
      "title": "Title 5"
    },
    {
      "previewImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria6.jpg",
      "thumbnailImageSrc": "https://zenklub.github.io/freud-ds/assets/img/gallery/galleria6.jpg",
      "alt": "Image 6",
      "title": "Title 6"
    }
  ]
  items: FreudMenuItem[] = [
    {label: 'Home', command: () => this.component = 'home', },
    {label: 'Form', command: () => this.component = 'form'}
  ]
}
