import { api, LightningElement } from 'lwc';

export default class EditRecordViaLightningRecordViewFormLDS extends LightningElement {
    @api recordId;
    objectApiName = 'Case';

    handleFormSuccess(event){
        // as soon as success happen resest the form , we have form + reset
        console.log('Success Called and invoked');
        const formElement = this.template.querySelector('lightning-record-edit-form');
        console.log(formElement);
        formElement.reset();
    }
    
}