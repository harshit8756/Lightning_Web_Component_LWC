public with sharing class TaskControllerWithImperativeMethod {
    
    @AuraEnabled
    public static List<Task> fetchDataImperativeMethod(String inputSubject){
        return [SELECT Id, Subject, Priority, Description, Status FROM Task WHERE Subject = :inputSubject ];
    }
}

// Notice that : we don't use the Cachebale = True , because this is an Imperative Call and we are simply making on-demand server request