import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/exampleWireAndImperativeApex.getAccounts';

export default class ExampleWireAndImperativeApex extends LightningElement {

    accounts = [];

    @wire(getAccounts)
    wiredAccounts({data , error}){
        if(data){
            this.accounts = data;
        }

        if(error){
            console.error('Error in fetching accounts : ' + error);
        }
    };
}