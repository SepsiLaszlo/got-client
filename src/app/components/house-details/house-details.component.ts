import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { House } from 'src/app/models/house';
import { CharaterService } from 'src/app/services/charater.service';
import { HouseService } from 'src/app/services/house.service';
import { IdService } from 'src/app/services/id.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  constructor(private houseService: HouseService,
    private route: ActivatedRoute,
    private characterService: CharaterService,
    private id: IdService) { }

  house: House;
  lord: Character;
  members: Character[] = []
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const houseId = +params.get('id')
        this.houseService.get(houseId).subscribe(
          house => {
            this.house = house
            const lordId = this.id.get(house.currentLord)
            this.characterService.get(lordId)
            .subscribe(
              lord => {
                lord.id = lordId
                this.lord = lord
              }
            )

            this.house.swornMembers.forEach(
              member_url => {
                const characterId = this.id.get(member_url)
                this.characterService.get(characterId).subscribe(
                  character =>{
                    character.id = characterId
                    this.members.push(character)
                    }
                )
              }
            )
          }
        )
      }
    )
  }

}
