import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop implements OnInit{
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Dzino Petrol');
    this.meta.updateTag({ name: 'description', content: 'Dzino Petrol shop — auto oprema, prehrambeni proizvodi, pića, dnevna štampa i još mnogo toga.' });
  }
}
