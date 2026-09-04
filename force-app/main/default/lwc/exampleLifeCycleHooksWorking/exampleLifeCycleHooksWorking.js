import { LightningElement } from 'lwc';

export default class ExampleLifeCycleHooksWorking extends LightningElement {
    message = 'Component is Loading....';
    count = 0;
    intervalId;
    hasRendered = false;

    constructor(){
        super();
        console.log('1. Constructor is called');
        this.message = 'Component is Constructed....';
    }

    connectedCallback(){
        console.log('2. Connected Callback is called');
        this.message = 'Component is connected to DOM...';
        this.intervalId = setInterval(() => {
            this.count++;
        }, 1000);
    }

    renderedCallback(){
        console.log('3. Rendered Callback is called');
        if(this.hasRendered){
            console.log('Component is already rendered');
            return;
        }
        this.hasRendered = true;
        console.log('First time Component is rendered to DOM...');
        const element = this.template.querySelector('.message');
        if(element){
            console.log('Element is found in the DOM' , element);
        }
        

    }

    disconnectedCallback(){
        console.log('4. Disconnected Callback is called');
        clearInterval(this.intervalId);
    }
}