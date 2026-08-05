import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api productId;
    @api productName;
    @api productRating;
}