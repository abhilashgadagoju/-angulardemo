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
  IsOriginCityNameValid: boolean = true;
  IsOriginZipCodeValid: boolean = true;
  IsOriginStateNameValid: boolean = true;
  IsDestinationCityNameValid: boolean = true;
  IsDestinationZipCodeValid: boolean = true;
  IsDestinationStateNameValid: boolean = true;


  //Method to reset Origin fields
  resetOriginFields() {
    this.shippingInfo.origin.city = '';
    this.shippingInfo.origin.stateProvince = '';
    this.shippingInfo.origin.zipCode = '';
  }

  // Method to reset destination fields
  resetDestinationFields() {
    this.shippingInfo.destination.city = '';
    this.shippingInfo.destination.stateProvince = '';
    this.shippingInfo.destination.zipCode = '';
  }

  validateZipCode(zipCode: string,IsOrigin: boolean) {
    // Regular expression for basic zip code validation
    const zipCodeRegex: RegExp = /^\d{5}$/;
    if(zipCodeRegex.test(zipCode)){
      console.log("IsOrigin",zipCode);
      if(IsOrigin){
        this.IsOriginZipCodeValid= true;
      }else{
        this.IsDestinationZipCodeValid= true;
      }
      this.onInputChange();  
    } else{
      if(IsOrigin){
        this.IsOriginZipCodeValid= false;
      }
      else{
        this.IsDestinationZipCodeValid= false;
      }
    }
  }

  validateStateName(Name: string,IsOrigin: boolean) {
    // Regular expression for basic Name validation
    const companyNameRegex: RegExp = /^[a-zA-Z\s]*$/;
    if(companyNameRegex.test(Name)&&Name!=""){
      if(IsOrigin){
        this.IsOriginStateNameValid= true;
      }else{
        this.IsDestinationStateNameValid= true;
      }
      this.onInputChange();
    }else{
      if(IsOrigin){
        this.IsOriginStateNameValid= false;
      } else{
        this.IsDestinationStateNameValid= false;
      }
    }
  }

  validateCityName(Name: string,IsOrigin: boolean) {
    // Regular expression for basic Name validation
    const companyNameRegex: RegExp = /^[a-zA-Z\s]*$/;
    if(companyNameRegex.test(Name)&&Name!=""){
      if(IsOrigin){
        this.IsOriginCityNameValid= true;
      } else{
        this.IsDestinationCityNameValid= true;
      }
      this.onInputChange();
    }else{
      if(IsOrigin){
        this.IsOriginCityNameValid= false;
      } else{
        this.IsDestinationCityNameValid= false;
      }
    }
  }



  onInputChange() {
    this.detailsupdateService.quotedetailsupdate.shippingInformation = this.shippingInfo;
    console.log("shippingInfo",this.shippingInfo);
    console.log("this.detailsupdateService.quotedetailsupdate.shippingInformation",this.detailsupdateService.quotedetailsupdate.shippingInformation);
  }

}
