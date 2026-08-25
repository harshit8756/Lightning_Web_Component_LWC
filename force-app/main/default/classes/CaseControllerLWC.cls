public with sharing class CaseControllerLWC {

    //fetch 10 cases based on their created date ascending order 
    //creating method for that
    @AuraEnabled(cacheable=true)
    public static List<Case> getCasesInSequence() {

        return [
            SELECT Id,Origin, Description, Priority, Subject, Reason
            FROM Case
            ORDER BY CreatedDate ASC
            LIMIT 10
        ];
    }
}