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

  emailAddress: string = '';
  emailBody: string = '';
  IsEmailValid: boolean = true;
  IsEmailBodyValid: boolean = true;
  EmailResponse: string =  '';
  Emailsent: boolean = false;

  constructor(private detailsService: DetailsService,
    private detailsupdateService:DetailsupdateService) { }

  updateFormData(value: any) {
    this.detailsupdateService.quotedetailsupdate.totalCharges = value;
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
    console.log("before IsEmailValid",this.IsEmailValid,"Entered email",this.emailAddress);
    console.log("before IsEmailBodyValid",this.IsEmailBodyValid,"Entered emailBody",this.emailBody);
    console.log("before Emailsent",this.Emailsent);
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
          console.log("after inside IsEmailValid",this.IsEmailValid,"Entered email",this.emailAddress);
    console.log("after inside IsEmailBodyValid",this.IsEmailBodyValid,"Entered emailBody",this.emailBody);
    console.log("after inside Emailsent",this.Emailsent);

        },
        (error) => {
          console.log('Error fetching details:', error);
        }
      );
        

    }

    console.log("after IsEmailValid",this.IsEmailValid,"Entered email",this.emailAddress);
    console.log("after IsEmailBodyValid",this.IsEmailBodyValid,"Entered emailBody",this.emailBody);
    console.log("after Emailsent",this.Emailsent);
    
    
  }
}
