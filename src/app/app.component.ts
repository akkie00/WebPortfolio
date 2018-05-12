import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit, NgModule, style, state, trigger, animate, transition } from '@angular/core';
import { Portfolio, PortfolioData} from '../models';   

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut',[
      transition(":enter", [
        style({opacity: 0}),  
        animate(500, style({opacity: 1}))     
      ]),
      transition(":leave",[
        animate(500, style({opacity: 0}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  public Portfolio: Portfolio;
  public logOpen: boolean = true;
  public updateOpen: boolean = true;
  public bioOpen: boolean = true;
  // public changeOpen: boolean = true;
  public ngOnInit(): void {
    this.Portfolio = PortfolioData;
      
  }
  public toggleOpen(valueToToggle: string): void {
    switch (valueToToggle) {
      case 'logOpen':
        this.logOpen = !this.logOpen;
        break;
      case 'updateOpen':
        this.updateOpen = !this.updateOpen;
        break;
      case 'bioOpen':
        this.bioOpen = !this.bioOpen;
        break;
      // case 'changeOpen':
      //   this.changeOpen = !this.changeOpen;
      //   break;
    }
  }
}
