import { LightningElement, wire } from 'lwc';
import {publish , MessageContext} from 'lightning/messageService';
import MESSAGE_CHANNEL_XML_FILE from '@salesforce/messageChannel/statusMessageChannel__c';

export default class PublisherLMS extends LightningElement {

    @wire(MessageContext) messageContext;
    handleSendMessage(){
        const message = {
            text : 'Message from Component A [Publisher]'
        };

        publish(
            this.messageContext,
            MESSAGE_CHANNEL_XML_FILE,
            message
        );

    }
}