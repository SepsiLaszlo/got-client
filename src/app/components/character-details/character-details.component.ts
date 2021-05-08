import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharaterService } from 'src/app/services/charater.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private characterService:CharaterService) { }

  character: Character;
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.characterService.get(id).subscribe(character =>this.character=character)
  }

}
