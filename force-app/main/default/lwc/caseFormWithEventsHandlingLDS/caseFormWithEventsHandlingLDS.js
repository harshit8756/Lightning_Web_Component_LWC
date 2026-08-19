import { LightningElement } from 'lwc';

export default class CaseFormWithEventsHandlingLDS extends LightningElement {
    objectApiName = 'Case';
    handleSubmit(event){
        console.log('Form Submitted for case creation' + event.detail);
    }

    handleSuccess(event){
        console.log();
        alert('Case has been successfully created' + event.detail);
    }

    handleError(event){
        console.log();
    }

    handleLoad(event){
        console.log();
    }
}