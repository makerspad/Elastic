import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
declare var owlCarousel:any;
//declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    SendMailResponse: any;
    obj:any={};
    error:string;
    errorboolean:boolean
    isShow: boolean;
    topPosToStartShowing = 200;
    
   
  

  ngOnInit() {
    // require("assets/js/bootstrap.min.js");
    // require("assets/js/shuffle.js");
    // require("assets/js/owl.carousel.js");
    this.owlIntializer();

  }

//   @HostListener('window:scroll')
//   checkScroll() {
      
    
//     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

//     console.log('[scroll]', scrollPosition);
    
//     if (scrollPosition >= this.topPosToStartShowing) {
//       this.isShow = true;
//     } else {
//       this.isShow = false;
//     }
//   }



// // TODO: Cross browsing
// gotoTop() {
//     window.scroll({ 
//       top: 0, 
//       left: 0, 
//       behavior: 'smooth' 
//     });
//   }


// sendEmail(){
//     if(this.contactForm.name==undefined || this.contactForm.email==undefined ){
//         this.error="Please fill the Mandatory Fields"
//         this.errorboolean=true
//         document.getElementById("usr1").style.borderColor = "1px solid red";
//         document.getElementById("usr2").style.borderColor = "1px solid red";

//      }
//      else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contactForm.email)===false)
//     {
//         this.error="You have entered an invalid email address!"
//         this.errorboolean=true
//     }
//     else{

//         this.SendMailResponse=null;
//         console.log(this.contactForm)
//         this._contactAPI.sendMail(this.contactForm).subscribe((data)=>{
//             this.contactForm=new ContactFormModel();
//             this.SendMailResponse="Message has been send successfully";
            
//             console.log(data);
//         },
//       (error)=>{
//           this.contactForm=new ContactFormModel();
//           this.SendMailResponse="There was problem while sending message"
//       });
//     }


// }   








  owlIntializer(){
    $(document).ready(function(){
      $('.product-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText: ["",""],

        responsive:{
            0:{
                items:1,
                nav:false
            },
            480:{
                items:2,
                nav:false
            },
            768:{
                items:3
            }
        }
    });

    $('.latest-news').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        navText: ["",""],

        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3
            }
        }
    });

    $('.client-testimonial').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText: ["",""],

        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1
            }
        }
    });

    $('.logo-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText: ["",""],

        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },

            768:{
                items:6
            },

            1000:{
                items:7
            }
        }
    });
    

      $('.equal-column').matchHeight();

  
    });
  }



 
}
