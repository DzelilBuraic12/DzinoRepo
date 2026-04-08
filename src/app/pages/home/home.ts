import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Džino Petrol');
    this.meta.updateTag({ name: 'description', content: 'Džino Petrol — vaša pouzdana benzinska pumpa u Maglaju i Kosovi. Kvalitetno gorivo, autopraonica, kafić i shop. Otvoreno 0-24h.' });
    this.meta.updateTag({ name: 'keywords', content: 'benzinska pumpa, Maglaj, Kosova, gorivo, autopraonica, kafić, shop, Dzino Petrol' });
    this.meta.updateTag({ property: 'og:title', content: 'Džino Petrol — Benzinska pumpa Maglaj & Kosova' });
    this.meta.updateTag({ property: 'og:description', content: 'Kvalitetno gorivo, autopraonica, kafić i shop na jednom mjestu.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
