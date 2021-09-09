import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable(
  {
    providedIn: 'root',
  }
)
export class CourseService {

  retrieveAll(): Course[] {
    return COURSES;
  }

  retrieveById(id: number): Course {
    return COURSES.find((courseIterator: Course) => courseIterator.id===id)!;
  }

  save(course: Course): void{
     if(course.id)
     {
        const index = COURSES.findIndex((courseIterator: Course)=> courseIterator.id === course.id);
        COURSES[index] = course;
     }
  }

}

var COURSES: Course[] =
  [
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
    },
    {
      id: 3,
      name: 'h2',
      imageUrl: '/assets/images/forms.png',
      price: 23,
      duration: 10,
      rating: 3,
      releaseDate: 'December, 2, 2019',
    },

    {
      id: 4,
      name: 'div',
      imageUrl: '/assets/images/http.png',
      price: 34.6,
      duration: 1,
      rating: 1,
      releaseDate: 'August, 2, 2019',
    }
  ]
