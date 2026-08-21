import { LightningElement } from 'lwc';

export default class CustomCaseCreatorLWC extends LightningElement {
    subject = '';
    description = '';
    priority = '';

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
    handleCreateCase() {
        
    }

}