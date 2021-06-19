import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, interval, merge, noop, Observable, of } from 'rxjs';
import { concatMapTo, map } from 'rxjs/operators';
import { courseRecord } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    // const source1$ = of (1 , 2, 3);
    const source1$ = interval(1000);
    const source2$ = of (4, 5, 6);


    const concat$ = concat( source1$, source2$ );

    // concat$.subscribe( val => console.log('concat', val))


    const merge$ = merge( source1$, source2$);
    // merge$.subscribe( mer => console.log('mer', mer))

  }



}
