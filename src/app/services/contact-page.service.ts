import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactFormModel } from '../contact-us/contactFormModel';
import { environment } from '../../environments/environment'

@Injectable()
export class ContactPageService {

  constructor(private http:HttpClient) { }
  private contactMailURL:string='/api/user/ContactForm';
  sendMail(data:ContactFormModel){
    console.log(data);
    console.log(environment.apiURL)
    return this.http.post(`${environment.apiURL}${this.contactMailURL}`,data);
  }

}