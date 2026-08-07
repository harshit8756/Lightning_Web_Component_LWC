import { LightningElement } from 'lwc';

export default class ReactivityCheckLwc extends LightningElement {
    userAddress = '123 Main St, Springfield, USA';
    // let assume this data comes from database in JSON format
    complexReactivityCheckJson = [
        {
            "id": "a4c05e97-94b1-426e-a2bd-a609ad233cf4",
            "name": "Sofia White",
            "email": "arjun.davis72@service.co",
            "active": false,
            "price": 618.13,
            "city": "Los Angeles"
        },
        {
            "id": "95972a19-48b2-45c0-a8a5-a39917d78bc1",
            "name": "Priya Thomas",
            "email": "lucas.williams55@hub.tech",
            "active": false,
            "price": 814.9,
            "city": "Hyderabad"
        },
        {
            "id": "4b59e245-58aa-4e8c-ae7c-a03a6167bcf2",
            "name": "Noah Sharma",
            "email": "raj.martinez20@app.dev",
            "active": true,
            "price": 130.37,
            "city": "Dubai"
        },
        {
            "id": "9a3584d7-a680-4c22-8768-e052d79f965c",
            "name": "Ana Gupta",
            "email": "omar.taylor15@corp.io",
            "active": false,
            "price": 766.36,
            "city": "Bangalore"
        },
        {
            "id": "8f4da6bc-1404-4664-99bf-d6bf1368a26f",
            "name": "Sana Davis",
            "email": "meera.shah11@cloudapp.io",
            "active": false,
            "price": 910.93,
            "city": "Delhi"
        }
    ];


    // now making this string json in object format to check the reactivity of the object in the child component.


    // create method for the update address value and check reacactivity of the component
    handleAddressUpdate() {
        this.userAddress = '456 Elm St, Springfield, USA';
    }
}