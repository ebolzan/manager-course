import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable(
  {
    providedIn: 'root',
  }
)
export class CourseService {

  private courseUrl: string = 'http://localhost:3100/api/courses';

  constructor(private httpClient: HttpClient){

  }

  retrieveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.courseUrl);

  }

  retrieveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.courseUrl}/${id}`);
  }

  save(course: Course): Observable<Course>{
     if(course.id)
     {
        return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course);
     }
     else{
      return this.httpClient.post<Course>(`${this.courseUrl}`, course);
     }
  }

  deleteById(id: number): Observable<any>{
      return this.httpClient.delete<any>(`${this.courseUrl}/${id}`)
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
