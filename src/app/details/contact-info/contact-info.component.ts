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

  IsEmailValid: boolean = true;
  IsPhoneValid: boolean = true;
  IsNameValid: boolean = true;
  IsAccountValid: boolean = true;

  ngOnInit() {
    // Assign the shippingInfo to the service on page load
    this.detailsupdateService.quotedetailsupdate.customerInformation = this.customerInfo;
    console.log("updated customerInfo",this.detailsupdateService.quotedetailsupdate.customerInformation);
  }

  validateEmail(email: string) {
    // Regular expression for basic email validation
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)){
      this.IsEmailValid= true;
      this.onInputChange();
    }else{
      this.IsEmailValid= false;
    }
  }

  validatePhone(phone: string) {
    // Regular expression for basic phone number validation
    const phoneRegex: RegExp = /^\d{10}$/;
    if(phoneRegex.test(phone)){
      this.IsPhoneValid= true;
      this.onInputChange();
    }else{
      this.IsPhoneValid= false;
    }
    
  }
  validatePhoneExt(phoneExt: string): boolean {
    // Regular expression for basic phone number validation
    const phoneExtRegex: RegExp = /^\d{4}$/;
    return phoneExtRegex.test(phoneExt);
  }
  validateZipCode(zipCode: string): boolean {
    // Regular expression for basic zip code validation
    const zipCodeRegex: RegExp = /^\d{5}$/;
    return zipCodeRegex.test(zipCode);
  }

  validateAddress(address: string): boolean {
    // Regular expression for basic address validation
    const addressRegex: RegExp = /^[a-zA-Z0-9\s,.'-]*$/;
    return addressRegex.test(address);
  }

  validateName(Name: string) {
    // Regular expression for basic Name validation
    const companyNameRegex: RegExp = /^[a-zA-Z\s]*$/;
    if(companyNameRegex.test(Name)&&Name!=""){
      this.IsNameValid= true;
      this.onInputChange();
    }else{
      this.IsNameValid= false;
    }
    
  }

  validateAccount(account: string) {
    // Regular expression for basic account validation
    const accountRegex: RegExp = /^[a-zA-Z0-9\s]*$/;
    if(accountRegex.test(account)&&account!=""){
      this.IsAccountValid= true;
      this.onInputChange();
    }else{
      this.IsAccountValid= false;
    }
    
  }

  validateEmailBody(emailBody: string) {
    // Regular expression for basic emailBody validation
    const emailBodyRegex: RegExp = /^[a-zA-Z0-9\s,.'-]*$/;
    if(emailBodyRegex.test(emailBody)){
      IsEmailBodyValid: true;
      this.onInputChange();
    }else{
      IsEmailBodyValid: true;
    }
    
  }


  onInputChange() {
    this.detailsupdateService.quotedetailsupdate.customerInformation = this.customerInfo;
  }


}
