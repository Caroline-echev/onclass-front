import { Component, OnInit } from '@angular/core';
import { route  } from 'src/app/util/route';
@Component({

  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  route = route
  constructor() { }
  ngOnInit(): void {
    

  }

}
