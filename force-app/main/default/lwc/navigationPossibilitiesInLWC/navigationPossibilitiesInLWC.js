import { LightningElement } from 'lwc';
// if we want to use the Navigation in our code , first we have to import from the lightning component like :
// NavigationMixin gives your component navigation capabilities.
import { NavigationMixin } from 'lightning/navigation';

//NavigationMixin(LightningElement) : it means take lightning element and add navigation functionality in it
// My components should have normal LWC functionality and Navigation Functionlaity.
// A mixin is a JavaScript pattern used to add additional behavior/functionality to a class.
export default class NavigationPossibilitiesInLWC extends NavigationMixin(LightningElement) {
    //WithoutNavigation 
    // export default class MyComponent extends LightningElement : your component has LWC FUNCTIONALITY

    // WithNavigation
    // export default class MyComponent extends NavigationMixin(LightningElement) : Your Component has LWC Functionality + Navigation Functionality

    navigateToRecordPage() {
        // to use into this we create a object for the NavigationMixin
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '001gK000002MsBwQAK',
                objectAPIName: 'Account',
                actionName: 'view'

            }
        })

    }

    navigateToCustomPage() {


    }

    navigateToListViewPage() {

    }

    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.google.com'
            }
        })

    }
}