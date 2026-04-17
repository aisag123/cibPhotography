import { Component, inject } from '@angular/core';
import { ShootService } from '../shoot-service';
import { BookingItem } from '../booking-item/booking-item';
@Component({
  selector: 'app-bookingslist',
  imports: [BookingItem],
  templateUrl: './bookingslist.html',
  styleUrl: './bookingslist.css',
})
export class Bookingslist {
shootService = inject(ShootService);
}
