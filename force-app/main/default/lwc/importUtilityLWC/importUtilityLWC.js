import { LightningElement } from 'lwc';
import mylogo from "@salesforce/resourceUrl/AgentforceLogo";
import customLabels from "@salesforce/label/c.Show_in_Production";
import svgVariable from "@salesforce/resourceUrl/SvgResources";
import USERWITHID from '@salesforce/user/Id';
import HASPERMISSION from "@salesforce/userPermission/ViewSetup";

//Form Factor
import DEVICEINFORMATION from "@salesforce/client/formFactor"

export default class ImportUtilityLWC extends LightningElement {
    src = mylogo;
    //showInProduction = false;
    svrExample = svgVariable;
    user = USERWITHID;
    //permission = HASPERMISSION;

    device = DEVICEINFORMATION;

    get showInProd() {
        return customLabels == "true" ? true : false;
    }

    get hasPermission(){
        console.log('Imported from permission set : ' + HASPERMISSION);
        return HASPERMISSION;
    }

}