import { LightningElement } from 'lwc';

export default class UseCase1 extends LightningElement {
    searchText = '';
    filterBy = 'All';
    sortBy = 'Name_Asc';

    columns = [
        {label : 'Name' , fieldName : 'name'},
        {label : 'Category' , fieldName : 'category'},
        {label : 'Score' , fieldName : 'score' , type : 'number'}
    ] ; //headers of the table
    
    items = [
        { id : '1' , name : 'Skills 1' , category : 'Python' , score : 85},
        { id : '2' , name : 'Skills 2' , category : 'LWC' , score : 87},
        { id : '3' , name : 'Skills 3' , category : 'Java' , score : 81},
        { id : '4' , name : 'Skills 4' , category : 'Java Script' , score : 82},
        { id : '5' , name : 'Skills 5' , category : 'C++' , score : 90},
        { id : '6' , name : 'Skills 6' , category : 'LWC' , score : 80},
        { id : '7' , name : 'Skills 7' , category : 'Java' , score : 94},
        { id : '8' , name : 'Skills 8' , category : 'Python' , score : 89}
    ]; // tables data which is from Salesforce that stores in it

    get filterOptions(){
        return [
            {label : 'All', value : 'All'},
            {label : 'Python' , value : 'Python'},
            {label : 'LWC' , value : 'LWC'},
            {label : 'Java' , value : 'Java'},
            {label : 'Java Script' , value : 'Java Script'},
            {label : 'C++' , value : 'C++'}
        ]
    }

    get sortOptions(){
        return [
                {label : 'Name [A - Z]' , value : 'Name_Asc'},
                {label : 'Name [Z - A]' , value : 'Name_Desc'}
        ]
    }

    handleSearch(event){
        console.log('Search Text will happen here : ' + event.target.value);
        this.searchText = event.target.value;
    }

    handleFilterChange(event){
        this.filterBy = event.detail.value;
    }

    handleSortChange(event){
        this.sortBy = event.detail.value;
    }

    get filteredDataItems(){
        // add your logic here to filter the data based on searchText, filterBy and sortBy
        const textToSearch = (this.searchText || '').toLowerCase();

        let result = this.items.filter(items => {
            // here I will check if the item is relevant to the search text and filter by category
            const textMatch = items.name.toLowerCase().includes(textToSearch);
            const filterByMatch = items.filterBy == this.filterBy;

            return textMatch && filterByMatch;

        });

        return result;

    }
}