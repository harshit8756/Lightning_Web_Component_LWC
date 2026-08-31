import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/multipleWiresController.getAccounts';
import getContacts from '@salesforce/apex/multipleWiresController.getContacts';
export default class MultipleWiresDependentAndIndependent extends LightningElement {
    getAccountList = [];
    getContactList = [];

    // #wire 1
    @wire(getAccounts)
    wireAccounts({data,error}){
        if(data){
            this.getAccountList = data;
        }else if(error){
            console.error('Account Error : ' + error);   
        }
    }

    // #wire 2
    @wire(getContacts)
    wiredContacts({data,error}){
        if(data){
            this.getContactList = data;
        }else if(error){
            console.error('Contact Error : ' + error);   
        }
    }
}