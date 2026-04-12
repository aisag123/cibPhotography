import { computed, Injectable, signal } from '@angular/core';
import { ShootType } from './models/shoot-type';
@Injectable({
  providedIn: 'root',
})
export class ShootService {
  shoots = signal<ShootType[]>([]);
  bookedShoots = computed(() => this.shoots.length);

  
}
