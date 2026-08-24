import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
import CASE_OBJECT from '@salesforce/schema/Case';
import SUBJECT from '@salesforce/schema/Case.Subject';
import PRIORITY from '@salesforce/schema/Case.Priority';
import DESCRIPTION from '@salesforce/schema/Case.Description';
import RECORDID from '@salesforce/schema/Case.RecordTypeId';

export default class CustomCaseCreatorLWC extends LightningElement {
    subject = '';
    description = '';
    priority = '';
    recordTypeId = '';

    // record type id
    // it will give you the entire object metadata so we can check and use one of them in the our code
    @wire(getObjectInfo , {objectApiName : CASE_OBJECT}) caseRecord({data , error}){
        if(data){
            //meta-data of the entire Case Object and we will get the recordId from the metadata and we use the @wire annotation method for that 
            let recordTypeDetails = data.recordTypeInfos;
            console.log('Data Recevied : ' + JSON.stringify(data));
            Object.keys(recordTypeDetails).forEach((key) => {
                const recordTypeInfo = recordTypeDetails[key];
                if(recordTypeInfo.name == 'Case Record Type'){
                    this.recordTypeId = recordTypeInfo.recordTypeId;
                }
            })
        }
    }

    get priorityOptions() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
        ];
    }

    // Variables and bind them with the input that we have created
    // how we ensure thta these varaibles are getting updated when the user is entered the values in the iinput firelds, then we use the event listener that 
    //is called input and change event listener

    handleSubjectChange(event) {
        //console.log('Subject changed:', event.target.value);
        this.subject = event.detail.value;
    }

    handleDescriptionChange(event) {
        // console.log('Description changed:', event.detail.value);
        this.description = event.detail.value;
    }

    handlePriorityChange(event) {
        // console.log('Priority changed:', event.detail.value);
        this.priority = event.detail.value;
    }

    // I have the vaues and now I have to create the case record using the createRecord method so that we can create the case record in the Salesforce database
    // without calling apex or server side code we can create the record using the createRecord method
    async handleCreateCase() {

        const fields = {};
        //Key value pair
        fields[SUBJECT.fieldApiName] = this.subject;
        fields[PRIORITY.fieldApiName] = this.priority;
        fields[DESCRIPTION.fieldApiName] = this.description;
        fields[RECORDID.fieldApiName] = this.recordTypeId;

        // object api bname and the list of fields
        // Case Object and fields : Subject , Priority , description
        let recrodInput = { apiName: CASE_OBJECT.objectApiName, fields };
        await createRecord(recrodInput)
        .then((record) => {
            alert('Case has been created successfully' + record.id);
        })
            .catch((err) => {
                alert('Something went wrong' + error.body.message);
            });

        // As soon as the record is create or error will come you actually want to alert it


    }

}