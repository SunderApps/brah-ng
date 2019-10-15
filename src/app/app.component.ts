import { Component } from '@angular/core';
import { CryptoService } from './crypto/crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  constructor(private cryptoService:CryptoService) {
    
  }

  ngOnInit() {
    this.cryptoService.init();
  }
}
