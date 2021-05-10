import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/services/house.service';
import { IdService } from 'src/app/services/id.service';

@Component({
  selector: 'app-house-index',
  templateUrl: './house-index.component.html',
  styleUrls: ['./house-index.component.css']
})
export class HouseIndexComponent implements OnInit {

  constructor(private houseService:HouseService, private idService:IdService) {
    houseService.getAll().subscribe(
      houses => {
        this.houses = houses
      this.houses.forEach(
        house=> house.id = idService.get(house.url)
      )
    }
    )
   }

  ngOnInit(): void {
  }

  houses:House[];



}
