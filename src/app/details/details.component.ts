import { Component } from '@angular/core';
import { DetailsService } from '../Services/details.service';
import { Detail, TotalCharges, QuoteDetailsApiResponse, Com, ComItem, ShippingInformation, CustomerInformation, QuoteDetails } from '../interface/quotedetailsresponse.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  quoteDetailsApiResponse!: QuoteDetailsApiResponse;
  totalCharges!: TotalCharges;
  coms!:ComItem[];
  shippingInformation!: ShippingInformation;
  customerInformation!: CustomerInformation;
  quoteDetails!: QuoteDetails;

  constructor(private detailsService: DetailsService) { }
  ngOnInit(): void {
    const id = '12';
    console.log("id is",id);
    this.fetchDetails(id);
    
  }

  fetchDetails(id: string): void {
    this.detailsService.getDetails(id)
      .subscribe(
        (response: QuoteDetailsApiResponse) => {
          console.log('API Response:', response);
          this.extractRequiredFields(response);
        },
        (error) => {
          console.log('Error fetching details:', error);
        }
      );
  }

  extractRequiredFields(response: QuoteDetailsApiResponse): void {
    this.quoteDetailsApiResponse = response;
    this.totalCharges = this.quoteDetailsApiResponse.details[0].quoteDetails.totalCharges;
    this.coms = this.quoteDetailsApiResponse.details[0].quoteDetails.com.coms;
    this.shippingInformation = this.quoteDetailsApiResponse.details[0].quoteDetails.shippingInformation;
    this.customerInformation = this.quoteDetailsApiResponse.details[0].quoteDetails.customerInformation;
    this.quoteDetails = this.quoteDetailsApiResponse.details[0].quoteDetails;
    console.log("response is quoteDetails",this.quoteDetails);
    console.log("response is Com",this.coms);
    console.log("response is Shipping Information",this.shippingInformation);
    console.log("response is Customer Information",this.customerInformation);
    console.log("response is quoteDetails",this.quoteDetails);
    console.log("response is total charges",this.totalCharges);
    
  }

}
