import { LightningElement, wire } from 'lwc';
import {subscribe , MessageContext} from 'lightning/messageService';
import SUBSCRIBE_CHANNEL_XML_FILE from '@salesforce/messageChannel/statusMessageChannel__c';
export default class SubscriberLMS extends LightningElement {
    @wire(MessageContext) messageContext;
    message = '';
    connectedCallback(){

        subscribe(
            this.messageContext,
            SUBSCRIBE_CHANNEL_XML_FILE,
            (message) => {
                this.message = message.text;
            }
        );
    }
}