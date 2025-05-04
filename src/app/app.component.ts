import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CpfSearchComponent } from "./cpf-search/cpf-search.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CpfSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QueryModule';
}
