import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sideBVis:boolean=false;
  openSide(){
    this.sideBVis=!this.sideBVis;
  }
}
