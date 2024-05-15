import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { QuoteDetailsApiResponse } from '../interface/quotedetailsresponse.interface';
import { quoteEmailRequestBody } from '../interface/quoteemail.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getDetails(id : string): Observable<QuoteDetailsApiResponse> {
    return this.http.get<QuoteDetailsApiResponse>(`${this.apiUrl}/details/${id}`);
  }

  sendEmail(emailBody:quoteEmailRequestBody): Observable<string> {
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(`${this.apiUrl}/details/email`, emailBody, {responseType: 'text'} );
    /*.pipe(
      map(response => {
        // Ensure response is a string
        if (typeof response === 'string') {
          return response;
        } else {
          // If response is not a string, convert it to a string
          return JSON.stringify(response);
        }
      })
    );*/
  }

}
