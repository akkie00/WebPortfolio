import { Social } from './social.interface';
export interface Portfolio {
    firstName: string;
    middleName: string;
    lastName: string;
    subheading: string;
    socialMedia: Social[];
    speakerBio: string;
    updates: Updates[];
    introduction: string;
    changeLog: ChangeLog[];

}