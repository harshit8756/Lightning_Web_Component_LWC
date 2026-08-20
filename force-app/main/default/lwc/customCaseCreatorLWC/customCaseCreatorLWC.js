import { LightningElement } from 'lwc';

export default class CustomCaseCreatorLWC extends LightningElement {
    get priorityOptions() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
        ];
    }
}