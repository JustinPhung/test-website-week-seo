import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  imgNum = 0;
  head = ['AACHEN KANN SMART', 'DYNAMISCHER STADTVERKEHR', 'TRAFFIC 4.0', ''];
  lead = ['', 'in motion by 4traffic', 'Digitalisierung des Straßenverkehrs', 'Was hälst du davon?'];

  deepWorldEles = [
    {'imagePath': 'assets/images/traffic1.jpg'},
    {'imagePath': 'assets/images/traffic.jpg'},
    {'imagePath': 'assets/images/traffic2.jpg'},
    {'imagePath': 'assets/images/contact.jpg'}
  ];

  constructor(meta: Meta, title: Title) {
    // Sets the <title></title>
    title.setTitle('Main');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: '4traffic' },
      { name: 'description',
        content: 'Traffic 4.0 angelehnt an Industrie 4.0.' },
      { name: 'keywords',
        content: '4traffic,4 traffic,' +
        'Traffic 4.0,Aachen,LoRaWAN,gruene Welle,Verkehrsmanagement,Smart City,Henric Breuer,Alexander Kotelnikow,Justin Phung'}
    ]);
  }

  ngOnInit() {
  }

  handleImageChange(event) {
    this.imgNum = event;
  }
}
