import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-server',
  templateUrl: './internal-server.component.html',
  styleUrls: ['./internal-server.component.scss']
})
export class InternalServerComponent implements OnInit {
  errorMessage: string = "500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!"

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
