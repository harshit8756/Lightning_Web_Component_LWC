public with sharing class exampleWireAndImperativeApex {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name FROM Account LIMIT 10];
    }
}