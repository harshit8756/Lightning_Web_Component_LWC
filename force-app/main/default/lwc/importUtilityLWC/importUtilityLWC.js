import { LightningElement } from 'lwc';
import mylogo from "@salesforce/resourceUrl/AgentforceLogo";
import customLabels from "@salesforce/label/c.Show_in_Production";
import svgVariable from "@salesforce/resourceUrl/SvgResources";

export default class ImportUtilityLWC extends LightningElement {
    src = mylogo;
    //showInProduction = false;
    svrExample = svgVariable;

    get showInProd() {
        return customLabels == "true" ? true : false;
    }

}