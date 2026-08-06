import {LightningElement, api } from 'lwc';

export default class ParentContainerComponent extends LightningElement {
    // productsFound = false; now at that time we have to pass this value to the child component, 
    // so that we can use this value in the child component and it is only accessible in the child measn it si an private variable and it is not accessible in the parent component.
    //  So, we have to use the @api decorator in the child component and then we can pass the values from the parent component to the child component.
    //Boolean public property must default to false.

    @api productsFound = false;

    // creating a variable same as the parent component and
    // then we can use this variable in the child component and it is only accessible in the child measn it si an private variable and
    // it is not accessible in the parent component.
    @api productList;
    parentCalled = false;

    // now this is exposed via @api decorator and now we can call this method from the parent component
    // aand this method will be called when the parent component calls this method.
    @api handleParentCall(){
        this.parentCalled = true;
    }
}