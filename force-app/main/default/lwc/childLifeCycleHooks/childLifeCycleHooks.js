import { LightningElement } from 'lwc';

export default class ChildLifeCycleHooks extends LightningElement {
    constructor(){
        super();
        console.log('Child - Constructor is called');
    }

    connectedCallback(){
        console.log('Child - Connected Callback is called');
    }

    renderedCallback(){
        console.log('Child - Rendered Callback is called');
    }

    disconnectedCallback(){
        console.log('Child - Disconnected Callback is called when is done with it was supposed to do');
    }
    errorCallback(stack, trace){
        console.log('Child -' +  stack + '----' + trace);
    }
}