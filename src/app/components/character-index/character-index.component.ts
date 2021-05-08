import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharaterService } from 'src/app/services/charater.service';

@Component({
  selector: 'app-character-index',
  templateUrl: './character-index.component.html',
  styleUrls: ['./character-index.component.css']
})
export class CharacterIndexComponent implements OnInit {

  characters: Character[]
  constructor(private characterService:CharaterService) {
    characterService.getAll().subscribe(
      characters=>{
        this.characters = characters
        this.characters.forEach(
          character=> character.id = characterService.getId(character.url)
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
