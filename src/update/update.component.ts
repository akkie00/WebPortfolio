import { Component, Input } from '@angular/core';
import { Updates } from '../models';

@Component({
    selector: 'portfolio-update',
    templateUrl: './update.component.html'
})

export class PortfolioUpdateComponent {
    @Input() public update: Updates;
} 