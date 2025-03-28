// src/app/home/home.page.ts
import { Component, OnInit, signal, computed } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { LogsService } from '../services/logs.service';
import { Country } from '../models/country';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonCard,
    IonCardContent,
    IonInput,
    IonButton,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
})
export class HomePage implements OnInit {
  countries = signal<Country[]>([]);
  
  searchQuery = signal('');

  filteredCountries = computed(() => {
    const query = this.normalizeText(this.searchQuery());
    if (query.length < 3) {
      return this.countries();
    }
    return this.countries().filter(country =>
      this.normalizeText(country.name.common).includes(query)
    );
  });

  constructor(
    private countriesService: CountriesService,
    private logsService: LogsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe({
      next: (resp: Country[]) => {
        console.log('Países recibidos:', resp);
        this.countries.set(resp);
      },
      error: (err) => console.error(err),
      complete: () => console.log('Fin del servicio Countries'),
    });
  }

  normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  restore(): void {
    this.searchQuery.set('');
  }

  openDetail(country: Country): void {
    this.logsService.addLog(country.name.common);
    this.router.navigate(['/detalle'], { state: { country } });
  }

  clearLogs(): void {
    this.logsService.clearLogs();
    console.log('Logs borrados');
  }
}
