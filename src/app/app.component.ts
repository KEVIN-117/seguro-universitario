import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'seguro-universitario';
  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('institucional') institucional!: ElementRef;
  @ViewChild('servicios') servicios!: ElementRef;
  @ViewChild('personalSalud') personalSalud!: ElementRef;
  @ViewChild('contrataciones') contrataciones!: ElementRef;
  hadleClick() {
    this.nav.nativeElement.classList.toggle('active');
  }

  removeClassTogle() {
    this.nav.nativeElement.classList.toggle('active');
  }

  closeMenu(target: string) {
    switch (target) {
      case 'institucional':
        this.institucional.nativeElement.classList.toggle('hidden');

        break;
      case 'servicios':
        this.servicios.nativeElement.classList.toggle('hidden');
        break;
      case 'personalSalud':
        this.personalSalud.nativeElement.classList.toggle('hidden');
        break;
      case 'contrataciones':
        this.contrataciones.nativeElement.classList.toggle('hidden');
        break;
      default:
        break;
    }
  }
}
