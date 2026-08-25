public with sharing class CaseControllerLWC {
    //fetch 20 cases based on their created date ascending order
    //creating method for that

    public static List<Case> getCasesInSequence(){
        return [SELECT Id, Origin, Description, Priority, Subject FROM Case ORDER BY CreatedDate LIMIT 20];
    }
}