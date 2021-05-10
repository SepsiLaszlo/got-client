import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { CharaterService } from 'src/app/services/charater.service';
import { IdService } from 'src/app/services/id.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private charaterService: CharaterService,
    private idService:IdService) { }

  id: number = 0;
  book: Book;
  characters: Character[] = [];
  ngOnInit(): void {
    
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.get(id).subscribe(
      book => {
        this.book = book
        this.getCharacters(book.characters)       
      }
    )
  }

  async getCharacters(character_urls: string[]) {
      character_urls.forEach(
        character_url => {
          let id = this.idService.get(character_url)
          this.charaterService.get(id).subscribe(
            character => {
              character.id = id
              this.characters.push(character)
            }
          )
        }
      )
  }

}
