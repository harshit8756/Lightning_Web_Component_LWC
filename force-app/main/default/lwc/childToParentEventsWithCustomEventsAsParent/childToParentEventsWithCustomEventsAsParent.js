import { LightningElement } from 'lwc';

export default class ChildToParentEventsWithCustomEventsAsParent extends LightningElement {
    showFinalValue;

    hanldeOnParentSide(event){
        this.showFinalValue =  event.detail;

    }
}