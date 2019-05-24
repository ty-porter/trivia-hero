import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ICategory } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public categoriesService: CategoriesService) { }

  triviaCategories: ICategory;
  categoryNotSelected: Boolean = true;
  categoryClass: String;

  ngOnInit() {
    this.showCategories();
  }

  showCategories() {
    this.categoriesService.getCategories()
      .subscribe( (data: ICategory) => {
        this.triviaCategories = {
          trivia_categories: data.trivia_categories
        };
      });
  }

  selectCategory(categoryClass: String) {
    this.categoryNotSelected = false;
    this.categoryClass = categoryClass;
  }

  goBack() {
    this.categoryNotSelected = !this.categoryNotSelected;
  }

}
