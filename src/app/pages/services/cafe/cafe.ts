import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cafe.html',
  styleUrl: './cafe.css'
})
export class Cafe implements OnInit{    
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Dzino Petrol');
    this.meta.updateTag({ name: 'description', content: 'Svježa kafa, topli i hladni napici te peciva u Dzino Petrol kafiću. Brza usluga za vozače na putu.' });
  }
}
