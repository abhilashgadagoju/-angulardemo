import { Injectable } from '@angular/core';
import { ComItem, QuoteDetailsUpdate } from '../interface/quotedetailsresponse.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsupdateService {
  private apiUrl = 'http://localhost:8080/api/v1';

  quotedetailsupdate: QuoteDetailsUpdate = {
    quoteNumber: '',
    exceptions: [],
    customerInformation: {
      account: '',
      companyName: '',
      dd1: '',
      dd2: '',
      rtb1: '',
      contactInformation: {
        name: '',
        phone: '',
        phoneExt: '',
        email: ''
      }
    },
    shippingInformation: {
      origin: {
        city: '',
        stateProvince: '',
        zipCode: '',
        country: ''
      },
      destination: {
        city: '',
        stateProvince: '',
        zipCode: '',
        country: ''
      }
    },
    com: {
      coms: []
    },
    totalCharges: {
      baseRate: "0",
      acc: "0",
      finalRate: "0"
    }
      
  };

  constructor(private http: HttpClient) { }

  updatecomItem( comItem: ComItem[]) {
    console.log("service layer comItem recived",comItem);
    this.quotedetailsupdate.com.coms=comItem;
  }

  updateDetails():Observable<string> {
    console.log("before sending api call Quote Details updated as:",this.quotedetailsupdate)
    return this.http.post(`${this.apiUrl}/details/email`, this.quotedetailsupdate, {responseType: 'text'} );
  }
}
