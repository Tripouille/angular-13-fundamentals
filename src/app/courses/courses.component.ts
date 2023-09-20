import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    {
      id: 1,
      title: 'Angular 13',
      description: 'Learn the basics of Angular 13',
      author: 'Mosh Hamedani',
      isFavorite: true,
    },
    {
      id: 2,
      title: 'Angular 14',
      description: 'Learn the basics of Angular 14',
      author: 'Mosh Hamedani',
      isFavorite: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectCourse(courseID: Course['id']) {
    this.courses = this.courses.map((course) => {
      if (course.id === courseID) {
        return { ...course, isFavorite: !course.isFavorite };
      }
      return course;
    })
  }
}
