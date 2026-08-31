public with sharing class multipleWiresController {
    
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){
        return [SELECT Id , Name , Industry FROM ACCOUNT LIMIT 5];
    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        return [SELECT Id, Name, Email FROM Contact LIMIT 5];
    }
}