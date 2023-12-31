import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories=[
    {
      cid:23,
      title: 'Programming',
      description: "Programming is GOOD!",
    },
    {
      cid:24,
      title: 'Java Programming',
      description: "Programming is GOOD!",
    },
    {
      cid:25,
      title: 'Python Programming',
      description: "Programming is GOOD!",
    },
  ]

  constructor(private _category:CategoryService) { }

  ngOnInit(): void {

    this._category.categories().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error', 'Error in loading data', 'error');
    });

  }

}
