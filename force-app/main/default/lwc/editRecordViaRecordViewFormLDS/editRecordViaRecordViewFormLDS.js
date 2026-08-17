import { api, LightningElement } from 'lwc';

const FIELDS = ['CaseNumber' , 'Reason' , 'Type'];
export default class EditRecordViaRecordViewFormLDS extends LightningElement {

    @api recordId;
    fields = FIELDS;
}