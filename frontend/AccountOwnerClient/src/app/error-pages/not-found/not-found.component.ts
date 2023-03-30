import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent  implements OnInit{
  notFountText: string = `404 SORRY COUDLN'T FIND IT!!!`;

  constructor() {}

  ngOnInit(): void {

  }
}
