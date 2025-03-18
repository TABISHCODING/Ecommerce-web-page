import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for common directives like *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // Required if you’re using forms in the header
import { RouterModule } from '@angular/router'; // Required if you’re using router links in the header
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-header',
  standalone: true, // Add this flag to make it a standalone component 
  imports: [CommonModule, FormsModule, RouterModule,],// Add necessary modules here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Correctly provided as an array of strings
  
})
export class HeaderComponent {

}
