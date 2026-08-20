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
        console.log('Subject changed:', event.target.value);
        this.subject = event.target.value;
    }

    handleDescriptionChange(event) {
        console.log('Description changed:', event.detail.value);
        this.description = event.detail.value;
    }

    handlePriorityChange(event) {
        console.log('Priority changed:', event.detail.value);
        this.priority = event.detail.value;
    }

}