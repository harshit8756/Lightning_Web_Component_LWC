import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/multipleWiresController.getAccounts';
import getContacts from '@salesforce/apex/multipleWiresController.getContacts';
export default class MultipleWiresDependentAndIndependent2 extends LightningElement {
    accountId;
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
        //Remember what '$' emeans : Watch 'accountId'. When its value becomes available or changes, use that value as the Apex Parameter
        @wire(getContacts, {accountId : '$accountId'})
        wiredContacts({data,error}){
            if(data){
                this.getContactList = data;
                console.log('Contacts Data : ', data);
        }
        if(error){
            console.error('Contact Error : ' + error);
        }

}
}

// Wire #1
//    ↓
// getAccount()
//    ↓
// Account Id = 001ABC
//    ↓
// accountId changes
//    ↓
// Wire #2 reacts
//    ↓
// getContacts(001ABC)
//    ↓
// Contacts returned