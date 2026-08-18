import { api, LightningElement } from 'lwc';

export default class EditRecordViaLightningRecordViewFormLDS extends LightningElement {
    @api recordId;
    objectApiName = 'Case';
    
}