import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { courseRecord } from '../common/util';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beginnerCourse : Course[];
  advanceCourse: Course[];

    constructor() {

    }

    ngOnInit() {


      const courses$ = courseRecord('api/courses');
      const http$ = courses$
                      .pipe(
                        map( rec =>  Object.values(rec["payload"]) )
                      );


      http$.subscribe(
        courses =>  {
          this.beginnerCourse = courses.filter( course =>  course.category === 'BEGINNER');
          this.advanceCourse = courses.filter( course => {
             return course.category === 'ADVANCED'

          } );
        },
        noop(),
        () => console.log('completed')
        )
    }

}
