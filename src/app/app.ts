import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, RouterOutlet, Router} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
  }
}
