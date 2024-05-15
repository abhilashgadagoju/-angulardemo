import { Component, Input } from '@angular/core';
import { DetailsupdateService } from 'src/app/Services/detailsupdate.service';
import { CustomerInformation } from 'src/app/interface/quotedetailsresponse.interface';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {

  constructor(private detailsupdateService: DetailsupdateService) { }

  @Input()  customerInfo!: CustomerInformation;

  ngOnInit() {
    // Assign the shippingInfo to the service on page load
    this.detailsupdateService.quotedetailsupdate.customerInformation = this.customerInfo;
    console.log("updated customerInfo",this.detailsupdateService.quotedetailsupdate.customerInformation);
  }

  onInputChange() {
    this.detailsupdateService.quotedetailsupdate.customerInformation = this.customerInfo;
  }


}
