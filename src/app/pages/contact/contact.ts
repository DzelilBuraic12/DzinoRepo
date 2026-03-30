import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
  this.meta.updateTag({ name: 'description', content: 'Kontaktirajte Dzino Petrol — pošaljite poruku, pozovite nas ili nas posjetite na jednoj od dvije lokacije.' });
  }

}
