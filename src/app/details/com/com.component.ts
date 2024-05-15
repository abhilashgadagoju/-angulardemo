import { Component, Input } from '@angular/core';
import { DetailsupdateService } from 'src/app/Services/detailsupdate.service';
import { ComItem, ShippingInformation } from 'src/app/interface/quotedetailsresponse.interface';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent {

  constructor(private detailsupdateService: DetailsupdateService) { }

  @Input() coms!: ComItem[];

  
  newComList:ComItem[] = [];
  addComFirstTime: boolean = true;
  isInvalid: boolean[] = [];
  isButtonClicked: boolean = false;

  // Add a trackBy function to improve rendering performance
  trackByFn(index: number, item: ComItem): number {
    return index; // Use index as the unique identifier
  }

  addInputField() {
    
    if (this.addComFirstTime) {
      this.addComFirstTime = false;
      this.newComList.push({
        count: 0,
        dd3: "dd3_value1",
        tb2: ""
      });
    }else if ( this.newComList[this.newComList.length-1].tb2==="" ) {
      this.isInvalid[this.newComList.length - 1] = true;
    }else if(this.isInvalid.some(value => value === true)){
      //do nothing
    }else {
      this.isInvalid[this.newComList.length - 1] = false;
      this.newComList.push({
        count: 0,
        dd3: "dd3_value1",
        tb2: ""
      });
    }
    console.log(this.newComList);
  }

  onInputChange(index: number, newValue: any) {
    if(newValue==="") {
      this.isInvalid[index] = true;
    }else{
      this.newComList[index].tb2 = newValue;
      this.detailsupdateService.updatecomItem( this.newComList);
      this.isInvalid[index] = false;
    }
    
  }

}
