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

  updateFormData(value: any) {
    this.detailsupdateService.quotedetailsupdate.customerInformation = value;
  }


}
