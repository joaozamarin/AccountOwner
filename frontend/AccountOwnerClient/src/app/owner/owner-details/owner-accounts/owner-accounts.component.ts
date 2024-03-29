import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/_interfaces/account.model.ts';

@Component({
  selector: 'app-owner-accounts',
  templateUrl: './owner-accounts.component.html',
  styleUrls: ['./owner-accounts.component.scss']
})
export class OwnerAccountsComponent implements OnInit{
  @Input() accounts: Account[];
  @Output() onAccountClick: EventEmitter<Account> = new EventEmitter();
  
  constructor() {

  }
  
  ngOnInit(): void {
    
  }

  onAccountClicked(account: Account) {
    this.onAccountClick.emit(account);
  }

}
