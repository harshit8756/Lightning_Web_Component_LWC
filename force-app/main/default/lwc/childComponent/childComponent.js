import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

    //connection to the Personal Laptop
    @api productId;
    @api productName;
    @api productRating;
}