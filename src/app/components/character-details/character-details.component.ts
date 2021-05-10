import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Character } from 'src/app/models/character';
import { BookService } from 'src/app/services/book.service';
import { CharaterService } from 'src/app/services/charater.service';
import { IdService } from 'src/app/services/id.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private characterService:CharaterService,
    private bookService:BookService,
    private idService: IdService) { }

  character: Character;
  books:Book[] = [];
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.characterService.get(id).subscribe(
      character =>{this.character=character
        character.books.forEach(
          book_url => {
            const id = this.idService.get(book_url)
            this.bookService.get(id).subscribe(
              book => {
                book.id = id;
                this.books.push(book)
              }
            )
          }
        )
      })
  }

}
