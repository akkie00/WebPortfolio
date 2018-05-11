import { Updates, ChangeLog, Social } from './';


export interface Portfolio {
    firstName: string;
    middleName: string;
    lastName: string;
    subheading: string;
    socialMedia: Social[];
    speakerBio: string;
    Updates: Updates[];
    introduction: string;
    changeLog: ChangeLog[];

}