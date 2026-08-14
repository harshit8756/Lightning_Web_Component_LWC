import { LightningElement } from 'lwc';

export default class ChildToTriggerEventCustomEventsAsChild extends LightningElement {
    selectedProduct;

    handleChildToParent(){
        
        this.selectedProduct = 'Data From Child-to-Parent';
        console.log('Passing Data from Child to Parent Via Custom Events');
        //Custom Events
        const event = new CustomEvent('senddatachildtoparent' , {
            detail : this.selectedProduct

        }); 

        // dispatch the customer event to the Parent via dispatcher
        this.dispatchEvent(event);
    }
}