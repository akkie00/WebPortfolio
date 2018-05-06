import { Component} from '@angular/core';
import  { CommonModule} from '@angular/common';
import { OnInit, NgModule } from '@angular/core';
import { Portfolio } from './../models/portfolio.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public Portfolio: Portfolio;
  public ngOnInit(): void{
    this.Portfolio= {
      firstName: "Akshay",
      middleName: "Kumar",
      lastName: "Kuchankar",
      subheading: "DevOps Support",
      socialMedia: [
        {
          icon: 'fa fa-linkedin fa-2x',
          link: 'https://www.linkedin.com/in/akshay-kumar-603740136/',
          color: '#007bb6'
        },
        {
          icon: 'fa fa-github fa-2x',
          link: 'https://github.com/akkie00',
          color: '#6e5494'
        }
      ],
      introduction: "Hello there, my name is Akshay kumar and I've started learning web development using HTML, CSS, JavaScript. This is my first Angular Project.",
      changeLog: [],
      updates: [],
      speakerBio: `Hi, I'm Akshay and I've recently started learning web development and
      I'm currently learning HTML, CSS, JavaScript and Angular. I hope to build a complete 
      web application on my own by the end of this year both front and back end. Apart from 
      learning web development, I currently work for an MNC as a part of DevOps support. I am a regular 
      user on Medium and hoping to write my very own article after completing my first project.
      This bio will be a very basic one since I've just started learning. And I hope this will 
      change at the end of the year.`
    }
  }
}
