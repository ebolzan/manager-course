import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];
  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Forms',
        imageUrl: '/assets/images/forms.png',
        price: 23,
        duration: 10,
        rating: 2,
        releaseDate: 'December, 2, 2019',
      },

      {
        id: 2,
        name: 'http',
        imageUrl: '/assets/images/http.png',
        price: 34.6,
        duration: 1,
        rating: 5,
        releaseDate: 'August, 2, 2019',
      }
    ]
  }

}
