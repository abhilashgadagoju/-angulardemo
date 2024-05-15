import { Component } from '@angular/core';
import { DetailsService } from '../Services/details.service';
import { Detail, TotalCharges, QuoteDetailsApiResponse, Com, ComItem, ShippingInformation, CustomerInformation, QuoteDetails } from '../interface/quotedetailsresponse.interface';
import { ActivatedRoute } from '@angular/router';

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
  quoteDetailsId!: any;

  constructor(private detailsService: DetailsService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.quoteDetailsId = params.get('id');
    console.log("params:", params);
    console.log("quoteDetailsId is", this.quoteDetailsId);
    this.fetchDetails(this.quoteDetailsId);
  });
    
  }

  fetchDetails(id: string): void {
    console.log("id is",id);
    this.detailsService.getDetails(id)
      .subscribe(
        (response: QuoteDetailsApiResponse) => {
          console.log('after API call Response received is', response);
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
  }

}
