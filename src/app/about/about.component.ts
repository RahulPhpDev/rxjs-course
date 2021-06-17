import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { noop, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { courseRecord } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }



}
