import { Component, OnInit } from '@angular/core';
import { AutorService } from '../service/autor.service';
import { AuthorWithBooks } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  autores: AuthorWithBooks[] = [];
  defaultImage: string = '../../../assets/autor.png';

  constructor(private autorService: AutorService, private router: Router) { }

  ngOnInit(): void {
    this.autorService.getAllAuthors().subscribe(
      (data) => {
        this.autores = data;
      },
      (error) => {
        console.error('Error fetching authors:', error);
      }
    );
  }

  setDefaultImage(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultImage;
  }

  verDetalle(book: any): void {
    this.router.navigate(['/admin/autor', book._id]);
  }
  
}
