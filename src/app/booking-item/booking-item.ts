import { Component, inject, input } from '@angular/core';
import { ShootService } from '../shoot-service';
import { ShootType } from '../models/shoot-type';
@Component({
  selector: 'app-booking-item',
  imports: [],
  templateUrl: './booking-item.html',
  styleUrl: './booking-item.css',
})
export class BookingItem {
shootService = inject(ShootService);
shoot = input.required<ShootType>();
}
