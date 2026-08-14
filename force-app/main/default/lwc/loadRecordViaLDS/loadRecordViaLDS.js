import { api, LightningElement } from 'lwc';

export default class LoadRecordViaLDS extends LightningElement {

    //creating variable in the js
    //recordId = '500gK00000AIKIfQAP'; // this is the hard coded record id of the Case object , working as static
    //for Dynamic we expose this variable at public level so we use the @api decorator
    @api recordId;
    objectApiName = 'Case';
    fields = ['CaseNumber','Priority','Status']
}