import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsService } from 'src/app/Services/details.service';
import { DetailsupdateService } from 'src/app/Services/detailsupdate.service';
import { TotalCharges } from 'src/app/interface/quotedetailsresponse.interface';

@Component({
  selector: 'app-total-charges',
  templateUrl: './total-charges.component.html',
  styleUrls: ['./total-charges.component.css']
})
export class TotalChargesComponent {
  @Input() totalCharges!:TotalCharges;

  @ViewChild('exampleModal') exampleModal!: ElementRef;
  @ViewChild('backdrop') backdrop!: ElementRef ;

  @Input() quoteNumber!:string;
  @Input() exceptions!:string[];

  emailAddress: string = '';
  emailBody: string = '';
  IsEmailValid: boolean = true;
  IsEmailBodyValid: boolean = true;
  EmailResponse: string =  '';
  Emailsent: boolean = false;

  constructor(private detailsService: DetailsService,
    private detailsupdateService:DetailsupdateService) { }

  updateQuoteDetailsData() {
    this.detailsupdateService.quotedetailsupdate.totalCharges = this.totalCharges;
    this.detailsupdateService.quotedetailsupdate.quoteNumber = this.quoteNumber;
    this.detailsupdateService.quotedetailsupdate.exceptions = this.exceptions;
    //this.detailsupdateService.quotedetailsupdate.com = this.com;
    this.detailsupdateService.updateDetails().subscribe(
      (response: string) => {
        console.log('Details updated successfully. API Response:', response);
      },
      (error) => {
        console.log('Error fetching details:', error);
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  openDialog(): void {
    // Show the modal and backdrop
    this.exampleModal.nativeElement.classList.add('show');
    this.backdrop.nativeElement.classList.add('show');
    document.body.classList.add('modal-open');
  }

  closeDialog(): void {
    // Hide the modal and backdrop
    this.exampleModal.nativeElement.classList.remove('show');
    this.backdrop.nativeElement.classList.remove('show');
    document.body.classList.remove('modal-open');
  }

  isValidEmail(email: string): boolean {
    // Regular expression for basic email validation
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  sendEmail(): void {
    // Send email logic
    console.log('Email values:', this.emailAddress, this.emailBody);
    this.IsEmailValid=this.isValidEmail(this.emailAddress)
    if(!this.IsEmailValid || this.emailAddress == '') {
      this.IsEmailValid = false;
      this.Emailsent = false;
    }else{
      this.IsEmailValid = true;
    }
    if(this.emailBody == '') {
      this.IsEmailBodyValid = false;
      this.Emailsent = false;
    }else{
      this.IsEmailBodyValid = true;
    }
    if(this.IsEmailValid && this.IsEmailBodyValid) {
      this.detailsService.sendEmail({body: this.emailBody, emailId: this.emailAddress})
      .subscribe(
        (response: string) => {
          
          this.EmailResponse = response;
          console.log('API Response:', response);
          this.Emailsent = true;
        },
        (error) => {
          console.log('Error fetching details:', error);
        }
      );  
    }
  }
}
