import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {
    // When you want the owner to pass any values to tis composed component, then we have to use the 
    // @api decorator in the child component and then we can pass the values from the parent component to the child component.

    // Non primitive data types are passed by reference
    productList = [
        { id: '1', name: 'Product A', rating: 4.5 },
        { id: '2', name: 'Product B', rating: 4.0 },
        { id: '3', name: 'Product C', rating: 3.8 },
        { id: '4', name: 'Product D', rating: 4.7 },
        { id: '5', name: 'Product E', rating: 4.2 }
    ];
}