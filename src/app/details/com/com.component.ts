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

  

  newComList: string[] = []; // Initial list of numbers
  addComFirstTime: boolean = false;
  isInvalid: boolean[] = [];
  isButtonClicked: boolean = false;

  // Add a trackBy function to improve rendering performance
  trackByFn(index: number, item: string): number {
    return index; // Use index as the unique identifier
  }

  addInputField() {
    
    if (!this.addComFirstTime) {
      this.addComFirstTime = true;
      this.newComList.push("");
    }else if (this.newComList[this.newComList.length - 1] === "") {
      this.isInvalid[this.newComList.length - 1] = true;
    }else {
      this.isInvalid[this.newComList.length - 1] = false;
      this.newComList.push("");
    }
    console.log(this.newComList);
  }

  updateFormData(value: any) {
    this.detailsupdateService.quotedetailsupdate.com = value;
  }

}
