import { CommonModule } from '@angular/common';
import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true, // ✅ If you want to make it standalone
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  imports:[CommonModule],
  encapsulation: ViewEncapsulation.None // <-- Disable encapsulation to allow global styles
})
export class BannerComponent {
  products= [
    {
      name: 'Zukes mini dog treats',
      description: 'Soft and chewy dog treats with added vitamins.',
      oldPrice: 10,
      newPrice: 7,
      discount: 10,
      rating: 5.0, // ✅ Added rating
      reviews: 123, // ✅ Added reviews
      image: '/assets/images/zukes_dog_treats.png'
    },
    {
      name: 'Umbro soccer ball',
      description: 'Durable casing for accurate trajectory and play.',
      oldPrice: 10,
      newPrice: 7,
      discount: 10,
      rating: 5.0, // ✅ Added rating
      reviews: 123, // ✅ Added reviews
      image: '/assets/images/umbro_soccer_ball.png'
    },
    {
      name: 'Turtle Wax Super',
      description: 'Quick and easy 1-step wax and dry spray wax.',
      oldPrice: 6,
      newPrice: 4,
      discount: 10,
      rating: 5.0, // ✅ Added rating
      reviews: 123, // ✅ Added reviews
      image: '/assets/images/turtle_wax.png'
    },
    {
      name: 'Weber',
      description: 'Heavy gauge construction and rust-resistant.',
      oldPrice: 200,
      newPrice: 100,
      discount: 10,
      rating: 5.0, // ✅ Added rating
      reviews: 123, // ✅ Added reviews
      image: '/assets/images/weber.png'
    },
    {
      name: 'Sony Headphones',
      description: 'Noise-canceling over-ear headphones.',
      oldPrice: 150,
      newPrice: 120,
      discount: 20,
      rating: 5.0, // ✅ Added rating
      reviews: 123, // ✅ Added reviews
      image: '/assets/images/sony_headphones.png'
    },
    /*{
      name: 'Nike Running Shoes',
      description: 'Comfortable and lightweight running shoes.',
      oldPrice: 100,
      newPrice: 80,
      discount: 20,
      image: '/assets/images/nike_running_shoes.png'
    },
   {
      name: 'Samsung Galaxy S21',
      description: 'Latest smartphone with AMOLED display.',
      oldPrice: 1000,
      newPrice: 850,
      discount: 15,
      image: '/assets/images/galaxy_s21.jpeg'
    },
    {
      name: 'Fitbit Charge 5',
      description: 'Fitness tracker with heart rate monitor.',
      oldPrice: 150,
      newPrice: 120,
      discount: 20,
      image: '/assets/images/fitbit_charge_5.jpeg'
    }*/
  ];
   // ✅ New Top Brands Array
   topBrands = [
    {
      name: 'Palmolive',
      discount: 10,
      count: 23,
      image: '/assets/images/palmolive.png'
    },
    {
      name: 'One A Day',
      discount: 10,
      count: 23,
      image: '/assets/images/one_a_day.png'
    },
    {
      name: 'Lenovo',
      discount: 10,
      count: 23,
      image: '/assets/images/lenovo.png'
    },
    {
      name: 'Dove',
      discount: 10,
      count: 23,
      image: '/assets/images/dove.jpeg'
    },
    /*{
      name: 'Apple',
      discount: 5,
      image: '/assets/images/apple.png'
    },*/
    {
      name: 'galaxy_s21',
      discount: 12,
      count: 23,
      image: '/assets/images/galaxy_s21.jpeg'
    },
    /*{
      name: 'Nike',
      discount: 15,
      image: '/assets/images/nike.png'
    },
    {
      name: 'Adidas',
      discount: 8,
      image: '/assets/images/adidas.png'
    }*/
  ];
  bestProducts = [
    {
      name: 'Coppertone Sport 8oz',
      description: 'Coppertone  has a continuous on any an...',
      oldPrice: 10,
      newPrice: 8,
      discount: 10,
      rating: 5.0,
      reviews: 123,
      image: '/assets/images/coppertone_sport.png'
    },
    {
      name: 'Colgate tooth paste..',
      description: '2020 Apple MacBook Air Laptop: App 8GB RAM, 256GB SS...',
      oldPrice: 8,
      newPrice: 5,
      discount: 10,
      rating: 5.0,
      reviews: 123,
      image: '/assets/images/colgate_toothpaste.png'
    },
    {
      name: 'Armor All Car cleaning soap',
      description: 'Armor All Ultra Shine Wash & Wax was most advanced technolog...',
      oldPrice: 10,
      newPrice: 8,
      discount: 10,
      rating: 5.0,
      reviews: 123,
      image: '/assets/images/armor_all.png'
    },
    {
      name: '240 count Pain Tablets',
      description: 'One pack of 24 Advil Pain Reducer coated tablets...',
      oldPrice: 20,
      newPrice: 16,
      discount: 10,
      rating: 5.0,
      reviews: 123,
      image: '/assets/images/advil_tablets.jpeg'
    },
    {
      name: 'Fitbit Charge 5',
      description: ' Fitness tracker with ,Fitness tracker withFitness tracker   heart    rate    monitor.',
      oldPrice: 150,
      newPrice: 120,
      discount: 20,
      image: '/assets/images/fitbit_charge_5.jpeg'},
  ];
  browsingHistory = [
    {
      name: 'Banana Brand blouse',
      description:
        '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13" Retina Display, 8GB RAM, 256GB SSD...',
      oldPrice: 1024.99,
      newPrice: 999.99,
      discount: 10,
      rating: 5.0,
      reviews: 123,
      image: '/assets/images/headset.jpeg'
    },
    {
      name: 'Banana Brand blouse',
      description:
        'Womens Split V Neck Cap Sleeve Tops Frill Trim Elegant Work Office Blouse Shirts...',
      oldPrice: 40,
      newPrice: 29,
      discount: 10,
      rating: 5.0,
      reviews: 123,
      image: '/assets/images/blouse.jpeg'
    },
    {
      name: 'Donna Karan',
      description: 'Flat Bed Sheets, Ultra Fine Collection',
      oldPrice: 80,
      newPrice: 50,
      discount: 10,
      rating: 5.0,
      reviews: 123,
      image: '/assets/images/sheets.jpeg'
    },
    {
      name: 'Banana Republic Shirt',
      description:
        'Men Split Neck Cap Sleeve Tops Frill Trim Elegant Work Office Shirt...',
      oldPrice: 40,
      newPrice: 29,
      discount: 10,
      rating: 5.0,
      reviews: 123,
      image: '/assets/images/shirt.jpeg'
    },
    {
      name: 'Adidas',
      description:
        'Men Fluo M Running Shoes For Men  5Really nice shoe for running',
      oldPrice: 40,
      newPrice: 29,
      discount: 8,
      rating: 5.0,
      reviews: 123,
      image: '/assets/images/adidas.jpeg'
    }
  ];
  
   // ✅ Generalized Scroll State
private scrollSpeed = 2;
private isScrolling: { [key: string]: boolean } = {};
private scrollDirection: { [key: string]: number } = {};

// ✅ Start Scroll (Reusable)
startScroll(event: MouseEvent, containerClass: string) {
  const container = document.querySelector(containerClass) as HTMLElement;
  if (!container) return;

  this.scrollDirection[containerClass] = event.clientX > window.innerWidth / 2 ? 1 : -1;

  // ✅ Stop any existing scroll to avoid conflicts
  this.stopScroll(containerClass);

  this.isScrolling[containerClass] = true;
  this.scrollProducts(container, containerClass);
}

// ✅ Stop Scroll (Reusable)
stopScroll(containerClass: string) {
  this.isScrolling[containerClass] = false;
}

// ✅ Scroll Logic (Reusable)
private scrollProducts(container: HTMLElement, containerClass: string) {
  if (!this.isScrolling[containerClass]) return;

  container.scrollLeft += this.scrollDirection[containerClass] * this.scrollSpeed;
  requestAnimationFrame(() => this.scrollProducts(container, containerClass));
}

  
  bannerImage: string = '/assets/images/Banner.png'; // Path to the image
  hisenseCardBig: string = '/assets/images/Hisense_Soundbar2.png';
h2:string = '/assets/images/h2.png';
h3: string ='/assets/images/h3.png';
h4:string ='/assets/images/h4.png';
ms1:string = '/assets/images/ms1.png';
ms2:string = '/assets/images/ms2.png';
ms3: string ='/assets/images/ms3.png';
ms4:string ='/assets/images/ms4.png';
rm1:string = '/assets/images/rm1.png';
rm2:string = '/assets/images/rm2.png';
rm3: string ='/assets/images/rm3.png';
rm4:string ='/assets/images/rm4.png';
le1:string = '/assets/images/le1.png';
le2:string = '/assets/images/le2.png';
le3: string ='/assets/images/le3.png';
le4:string ='/assets/images/le4.png';
}
