import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component'; // Import BannerComponen
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true, // Add this flag to make it a standalone component
  imports: [RouterOutlet, HeaderComponent,BannerComponent,FooterComponent], // Added RouterOutlet and HeaderComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Use styleUrls (array of strings)
})
export class AppComponent {
  title = 'my-web-design';
}
