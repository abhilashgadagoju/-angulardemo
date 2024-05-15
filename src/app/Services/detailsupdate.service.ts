import { Injectable } from '@angular/core';
import { QuoteDetailsUpdate } from '../interface/quotedetailsresponse.interface';
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

  updateDetails():Observable<string> {
    return this.http.post(`${this.apiUrl}/details/email`, this.quotedetailsupdate, {responseType: 'text'} );
  }
}
