import { computed, Injectable, signal } from '@angular/core';
import { sampleShoots, ShootType } from './models/shoot-type';
@Injectable({
  providedIn: 'root',
})
export class ShootService {
  shoots = signal<ShootType[]>(sampleShoots);
  bookedShoots = computed(() => this.shoots().length);

  
}
