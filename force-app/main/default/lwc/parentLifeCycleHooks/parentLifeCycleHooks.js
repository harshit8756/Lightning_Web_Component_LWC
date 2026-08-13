import { LightningElement } from 'lwc';

export default class ParentLifeCycleHooks extends LightningElement {
    constructor(){
        super();
        console.log('Parent - Constructor is called');
    }

    connectedCallback(){
        console.log('Parent - Connected Callback is called');
    }

    renderedCallback(){
        console.log('Parent - Rendered Callback is called');
    }

    disconnectedCallback(){
        console.log('Parent - Disconnected Callback is called when is done with it was supposed to do');
    }
    errorCallback(stack, trace){
        console.log('Parent -' + stack + '----' + trace);
    }
}