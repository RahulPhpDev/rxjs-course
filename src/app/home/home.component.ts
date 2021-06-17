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
  beginnerCourse$: Observable<Course[]>;
  advanceCourse$ : Observable<Course[]>;
  courses$ : Observable<Course[]>;
    constructor() {

    }

    ngOnInit() {


      const http$ = courseRecord('api/courses');
      this.courses$= http$.pipe(
                        map( rec =>  Object.values(rec["payload"]) )
                      );

       this.beginnerCourse$ = this.courses$
                            .pipe(
                                map(cc => cc.filter(course => course.category == 'BEGINNER'))
                            );

      this.advanceCourse$ = this.courses$.pipe( map (courses => courses.filter(course => course.category === 'ADVANCED') ) );
    }

}
