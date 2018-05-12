import { Component, Input } from '@angular/core';
import { ChangeLog } from './../models/';

@Component ({
    selector: 'portfolio-change',
    templateUrl: './changelog.component.html'
})

export class PortfolioChangeComponent {
    @Input() public changeData: ChangeLog;
}