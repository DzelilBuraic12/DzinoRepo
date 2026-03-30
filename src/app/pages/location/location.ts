import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.css',
})
export class Location implements OnInit{
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
  this.title.setTitle('Lokacija — Dzino Petrol Maglaj & Kosova');
  this.meta.updateTag({ name: 'description', content: 'Pronađite Dzino Petrol benzinsku pumpu u Maglaju (0-24h) i Kosovi (06-23h). Adrese, telefoni i Google Maps.' });
  }

}
