import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DetailsupdateService } from 'src/app/Services/detailsupdate.service';
import { ShippingInformation } from 'src/app/interface/quotedetailsresponse.interface';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent {

  constructor(private detailsupdateService: DetailsupdateService) { }

  ngOnInit() {
    // Assign the shippingInfo to the service on page load
    this.detailsupdateService.quotedetailsupdate.shippingInformation = this.shippingInfo;
    console.log("updated shippingInfo",this.detailsupdateService.quotedetailsupdate.shippingInformation);
  }

  @Input() shippingInfo!: ShippingInformation;


  // ViewChild to access input fields
  @ViewChild('destinationZip') destinationZip!: ElementRef<HTMLInputElement>;
  @ViewChild('destinationCity') destinationCity!:ElementRef<HTMLInputElement> ;
  @ViewChild('destinationState') destinationState!: ElementRef<HTMLInputElement>;
  @ViewChild('originZip') originZip!: ElementRef<HTMLInputElement>;
  @ViewChild('originCity') originCity!: ElementRef<HTMLInputElement>;
  @ViewChild('originState') originState!: ElementRef<HTMLInputElement>;

  //Method to reset Origin fields
  resetOriginFields() {
    this.originZip.nativeElement.value = '';
    this.originCity.nativeElement.value = '';
    this.originState.nativeElement.value = ''; 
  }

  // Method to reset destination fields
  resetDestinationFields() {
    this.destinationZip.nativeElement.value = '';
    this.destinationCity.nativeElement.value = '';
    this.destinationState.nativeElement.value = '';
  }



  onInputChange() {
    this.detailsupdateService.quotedetailsupdate.shippingInformation = this.shippingInfo;
    console.log("shippingInfo",this.shippingInfo);
    console.log("this.detailsupdateService.quotedetailsupdate.shippingInformation",this.detailsupdateService.quotedetailsupdate.shippingInformation);
  }

}
