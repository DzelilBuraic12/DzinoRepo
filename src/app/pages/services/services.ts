import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Dzino Petrol');
    this.meta.updateTag({ name: 'description', content: 'Pranje auta, shop, kafić i pumpa za gume — sve usluge Dzino Petrol benzinske pumpe na jednom mjestu.' });
  }
}

