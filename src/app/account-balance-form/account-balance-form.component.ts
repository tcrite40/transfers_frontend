import { Component } from '@angular/core';

import { WebSocketsService } from '../websockets.service';
import { InputDisplayCommService} from '../inputDisplayComm.service';

@Component({
  selector: 'app-account-balance-form',
  templateUrl: './account-balance-form.component.html',
  styleUrls: ['./account-balance-form.component.css']
})
export class AccountBalanceFormComponent {

  private readonly webSocketsService: WebSocketsService;
  private readonly inputDisplayCommService: InputDisplayCommService;

  constructor(webSocketsService: WebSocketsService,
    inputDisplayCommService: InputDisplayCommService) {

    this.webSocketsService = webSocketsService;
    this.inputDisplayCommService = inputDisplayCommService;
  }

  onUserInputChange({ target }) {
    console.debug('Value of the input change event: %o', target.value);
    // console.debug('Type of the input change event: %o', typeof target.value);

    this.inputDisplayCommService.clearBalance();
    this.inputDisplayCommService.accountIdEntered(target.value);
    this.webSocketsService.sendAccountBalanceRequestAndSubscriptions(target.value);
  }
}
