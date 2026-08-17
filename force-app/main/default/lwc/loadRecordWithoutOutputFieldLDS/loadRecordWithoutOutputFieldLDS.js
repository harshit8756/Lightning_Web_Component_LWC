import { api, LightningElement, wire } from 'lwc';
//importing
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber';
import CASE_ORIGIN from '@salesforce/schema/Case.Origin';
import CASE_REGION from '@salesforce/schema/Case.Reason';
import CASE_TYPE from '@salesforce/schema/Case.Type';
import CASE_STATUS from '@salesforce/schema/Case.Status';
export default class LoadRecordWithoutOutputFieldLDS extends LightningElement {

    // we do not want to use the output field, or in that matter we don't want to use the view-form or form at ny way
    // we just want to load some data from a specific record on our page 
    // if we use the getRecord, getFieldValue first we have to import

    @api recordId;

    fields = [CASE_NUMBER , CASE_REGION , CASE_STATUS , CASE_TYPE , CASE_ORIGIN];

    @wire (getRecord, {recordId : '$recordId' , fields : '$fields'}) caseVar;

    get caseNumber(){
        return getFieldValue(this.caseVar.data, CASE_NUMBER);
    }

    get origin(){
        return getFieldValue(this.caseVar.data, CASE_ORIGIN);
    }

    get status(){
        return getFieldValue(this.caseVar.data, CASE_STATUS);
    }
}