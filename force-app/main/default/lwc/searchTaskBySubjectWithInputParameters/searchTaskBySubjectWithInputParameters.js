import { LightningElement, wire } from 'lwc';
import fetchTasksBySubject from '@salesforce/apex/TaskControllerLWC.fetchTasksBySubject';
export default class SearchTaskBySubjectWithInputParameters extends LightningElement {
    taskList;
    subjectTask = 'Follow Up';
    @wire(fetchTasksBySubject , {subjectString: '$subjectTask'}) //dynamically binding for reactivity
    wiredTasks({data , error}){
        if(data){
            console.log('Data found ?' + data)
            this.taskList  = data; //list of tasks
        }
        else if(error){
            console.log('Error: Something went wrong' +  error.body.message);
            // this error is an object , this object contain a body and that body contains a message
        }    }
}