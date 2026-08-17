import { LightningElement , api} from 'lwc';

export default class LoadRecordWithCustomlayoutLDS extends LightningElement {
        @api recordId;
        objectApiName = 'Case';
        fields = ['CaseNumber','Priority','Status']
}