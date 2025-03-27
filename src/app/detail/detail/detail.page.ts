import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonImg } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../models/country';

@Component({
  selector: 'app-detalle',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonImg, 
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
  ],
})
export class DetallePage implements OnInit {
  country?: Country;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras && nav.extras.state && nav.extras.state['country']) {
      this.country = nav.extras.state['country'] as Country;
    }
  }
}
