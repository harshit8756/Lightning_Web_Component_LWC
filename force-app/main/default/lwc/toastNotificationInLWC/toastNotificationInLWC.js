import { LightningElement } from 'lwc';
import createTask from '@salesforce/apex/toastMessageController.createTask';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ToastNotificationInLWC extends LightningElement {

    subject = '';
    //Get value from Input
    handleSubjectChange(event){
        this.subject = event.target.value;
    }

    // Calling apex
    handleCreateTask(){
        createTask({subject : this.subject})

        //success
        .then(result => {
            console.log('Task Create : ' + result);
            this.dispatchEvent(
                new ShowToastEvent({
                    title : 'Success',
                    message : 'Task Created Successfully !',
                    variant : 'success'
                })
            );
        })
        .catch(error => {
            console.error('Error : ' + error);
            this.dispatchEvent(
                new ShowToastEvent({
                    title : 'Error',
                    message : error.body ?.message  || 'Something went wrong',
                    variant : error
                })
            );
        });

    }
}