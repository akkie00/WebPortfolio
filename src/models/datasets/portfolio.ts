import { Portfolio } from '../';

export const PortfolioData: Portfolio = {
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
        },
        {
            icon: 'fa fa-twitter-square fa-2x',
            link: 'https://twitter.com/akkie2192',
            color: '#00aced'
        },
        {
            icon: 'fa fa-qoura fa-2x',
            link: 'https://www.quora.com/profile/Akshay-Kumar-693',
            color: '#D01010'
        }
    ],
    introduction: "Hello there, my name is Akshay kumar and I've started learning web development using HTML, CSS, JavaScript. This is my first Angular Project.",
    changeLog: [
        {
            color: '#77d360',
            month: 'April',
            year: 2018,
            highlight: ' Completed Udacity Free Scholorship course for Front-end Web Development',
            details: `Completed the course from Udacity which started on February, 2018. It was 
        a good starter course for beginners with introduction to HTML, CSS, JavaScript, JQuery and
        a small project.`
        },
        {
            color: '#d69a39',
            month: 'February',
            year: 2018,
            highlight: ' Created git hub profile',
            details: 'Started working on Git and pushing changes to it more frequently since then'
        },
        {
            color: '#f0553a',
            month: 'August',
            year: 2017,
            highlight: ' Started working on my DevOps project in my company.',
            details: `The project which I work on is basically is a support project,
        in which we have to setup environment and provide it to the developers.
        It deals with problems that developers and testers face while they're working. 
        We have to make sure that services are not interrupted and that the workflow is 
        smooth.`
        }
    ],
    Updates: [
        {
            icon: 'fa fa-file-text',
            description: ' Medium',
            link: 'https://medium.com/@akshaykumar_92451/has-recommended'
        },
        {
            icon: 'fa fa-file-text',
            description: ' Quora Answers',
            link: 'https://www.quora.com/profile/Akshay-Kumar-693'
        },
        {
            icon: 'fa fa-file-code-o',
            description: '  Udacity\'s PixelArtMaker Project',
            link: 'https://github.com/akkie00/UdacityProjects/tree/master/PixelArt'
        }
    ],
    speakerBio: `Hi, I'm Akshay and I've recently started learning web development and
    I'm currently learning HTML, CSS, JavaScript and Angular. I hope to build a complete 
    web application on my own by the end of this year both front and back end. Apart from 
    learning web development, I currently work for an MNC as a part of DevOps support. I am a regular 
    user on Medium and hoping to write my very own article after completing my first project.
    This bio will be a very basic one since I've just started learning. And I hope this will 
    change at the end of the year.`

}