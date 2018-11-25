import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    // Sets the <title></title>
    title.setTitle('Info');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: '4traffic' },
      { name: 'description',
        content: '4traffic sorgt für dynamischen Stadtverkehr ebenso wie fuer die gruene Welle. Verkehrsmanagement 4.0.' },
    ]);
  }

  ngOnInit() {
  }

}
