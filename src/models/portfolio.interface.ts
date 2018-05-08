import { Updates } from './udaptes.interface';
import { ChangeLog } from './changelog.interface';
import { Social } from './social.interface';

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