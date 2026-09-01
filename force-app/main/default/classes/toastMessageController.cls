// Use Case: Create a Task

// User enters a Task Subject and clicks Create Task.
// If the Task is created → show Success Toast.
// If something goes wrong → show Error Toast.
public with sharing class toastMessageController {

    @AuraEnabled
    public static Id createTask(String subject){

        Task task = new Task(
            Subject = subject,
            Status = 'Not Started',
            Priority = 'Normal'
        );

        insert task;

        return task.Id;

    }
    
}