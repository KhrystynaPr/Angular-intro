import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor (public translate: TranslateService) {}

  changeLand(lang: any) {
    this.translate.use(lang.target.value)
  }
}

