import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-car-wash',
  imports: [RouterLink],
  templateUrl: './car-wash.html',
  styleUrl: './car-wash.css'
})
export class CarWash implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Dzino Petrol');
    this.meta.updateTag({ name: 'description', content: 'Profesionalna autopraonica Dzino Petrol. Vanjsko pranje, pranje sa voskom, poliranje i čišćenje unutrašnjosti.' });
  }
}
