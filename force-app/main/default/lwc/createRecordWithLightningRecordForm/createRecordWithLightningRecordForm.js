import { LightningElement } from 'lwc';

export default class CreateRecordWithLightningRecordForm extends LightningElement {
    fields = ['Subject' , 'Reason' , 'Type' , 'Origin' , 'Priority' , 'SLAViolation__c'];
}