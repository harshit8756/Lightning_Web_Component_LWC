import { LightningElement } from 'lwc';
export default class LifeCycleHooks extends LightningElement {
    userName = 'Life Cycle Hooks';

    handleNameChange(){
        this.userName = 'Changes has been Happened';
    }

    constructor(){
        super();
        console.log('Constructor is called');
    }

    connectedCallback(){
        console.log('Connected Callback is called');
    }

    renderedCallback(){
        console.log('Rendered Callback is called');
    }

    disconnectedCallback(){
        console.log('Disconnected Callback is called when is done with it was supposed to do');
    }
    errorCallback(stack, trace){
        console.log(stack + '----' + trace);
    }
}