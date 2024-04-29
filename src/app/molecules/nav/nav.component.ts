import { Component, OnInit } from '@angular/core';
import { routeImg  } from 'src/app/util/route.images';
@Component({

  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  route = routeImg
  constructor() { }
  ngOnInit(): void {
    

  }

}
