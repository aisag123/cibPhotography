import { Component, inject } from '@angular/core';
import { ShootService } from '../shoot-service';

@Component({
  selector: 'app-bookingslist',
  imports: [],
  templateUrl: './bookingslist.html',
  styleUrl: './bookingslist.css',
})
export class Bookingslist {
shootService = inject(ShootService);
}
