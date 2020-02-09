import { Component, OnInit } from '@angular/core';
import {ContactFormModel } from "./contactFormModel";
import {ContactPageService } from "../services/contact-page.service"
import { from } from 'rxjs';
declare var google:any; 


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent implements OnInit {



  
  contactForm:ContactFormModel;
  SendMailResponse:string=null;
constructor(private _contactAPI:ContactPageService) { 
    this.contactForm=new ContactFormModel();
}

ngOnInit() {
google.maps.event.addDomListener(window, 'load', this.initialize());
}
initialize() {
  var myLatlng = new google.maps.LatLng(35.8804898,-78.8443016);
  var mapOptions = {
      zoom: 15,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: 'satellite'
  }
  var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Makerspad'
  });

  var contentString = ''+
          ''+
          '';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
  });
}

sendEmail(){
    this.SendMailResponse=null;
    this._contactAPI.sendMail(this.contactForm).subscribe((data)=>{
        //alert('message has been send sucessfullly');
        this.contactForm=new ContactFormModel();
        this.SendMailResponse="Message has been send successfully";
        
        console.log(data);
    },
  (error)=>{
      this.contactForm=new ContactFormModel();
      this.SendMailResponse="There was problem while sending message"
  });
}

}
