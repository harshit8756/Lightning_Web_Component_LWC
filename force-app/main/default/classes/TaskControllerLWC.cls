public with sharing class TaskControllerLWC {
    // we are taking as input paameters to work on that
    public static List<Task> fetchTasksBySubject(String subjectString ){
        
        return [SELECT Id, Subject , Status, Description FROM Task WHERE Subject = :subjectString];
    }

}