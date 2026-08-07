import { LightningElement } from 'lwc';

export default class ReactivityCheckLwc extends LightningElement {
    userAddress = '123 Main St, Springfield, USA';

    // create method for the update address value and check reacactivity of the component
    handleAddressUpdate(){
        this.userAddress = '456 Elm St, Springfield, USA';
    }
}