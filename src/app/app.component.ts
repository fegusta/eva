import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeComprasComponent } from "./components/lista-de-compras/lista-de-compras.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaDeComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-eva';

  logClick(menuItem: string) {
    console.log(`Clique no menu: ${menuItem}`);
  }
}
