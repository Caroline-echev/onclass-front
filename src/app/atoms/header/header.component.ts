import { Component, OnInit } from '@angular/core';
import { routeImg  } from 'src/app/util/route.images';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  route = routeImg
  constructor() { }

  ngOnInit(): void {
  }

}
