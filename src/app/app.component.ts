import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FuckerComponent } from "./fucker/fucker.component";
import { HeroSecComponent } from "./hero-sec/hero-sec.component";
import { AboutSecComponent } from "./about-sec/about-sec.component";
import { GoalsComponent } from "./goals/goals.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FuckerComponent, HeroSecComponent, AboutSecComponent, GoalsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AktiMail-Re';
}
