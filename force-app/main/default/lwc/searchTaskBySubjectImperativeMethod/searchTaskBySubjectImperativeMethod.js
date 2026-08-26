import { LightningElement } from 'lwc';
//import Apex Method into LWC , this makes your apex method available in JavaScript
import fetchDataImperativeMethod from '@salesforce/apex/TaskControllerWithImperativeMethod.fetchDataImperativeMethod';
export default class SearchTaskBySubjectImperativeMethod extends LightningElement {

    subjectTask = ''; // this variable stores whatever the user types. e.g: User Types -> Follow Up , subjectTask = 'Follow Up'
    taskList = []; // this stores the tasks returned by Apex

    //this methods runs when the user types/changes the input
    handleSubjectChange(event){
        this.subjectTask = event.target.value;
    }

    //this is the imperative apex call, Calls Apex Manaually
    handleSearch(){
        //when this method has been called then what we have to do
        fetchDataImperativeMethod({inputSubject : this.subjectTask}) //if this.subjectTask = 'Follow Up' , then Apex Receives inputSubject = 'Follow Up'
        //this is used for handle the success response
        .then( result => {
            console.log('Task Received : ' , result);
            this.taskList = result;
        })
        //if apex fails, the error comes here
        .catch(error => {
            console.error('Error Received : ' , error);
        });
    }
}

// fetchDataImperativeMethod({inputSubject : this.subjectTask}) , is the Imperative Call
// You are explicitly saying : "Call fetchTaksBySubject" now and pass my subjectTask value to the Apex 
// parameter inputSubject
