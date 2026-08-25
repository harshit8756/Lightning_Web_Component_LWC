import { LightningElement, wire } from 'lwc';
import getCasesInSequence from '@salesforce/apex/CaseControllerLWC.getCasesInSequence';

export default class CaseListWithWireUsingApexController extends LightningElement {

    caseList;
    //binding apex controller to the js so we use the wire annotation method so we can bind data into them
    //wire it 
    //who to wire (apex method name) 
    //once wiring is done , do you want to do anything ? Yes, I want to store the data I received into a variable that I will use in my HTML 
    //once wiring is done meaning I need to do the callback; 
    //every wire method return 2 things [data , error]

    @wire(getCasesInSequence)
    wiredCases({ data, error }) {

        if (data) {
            this.caseList = data;
            console.log('Cases received:', data);
        }

        if (error) {
            console.error('Error is received while connecting to Apex Controller:', error);
        }
    }
}