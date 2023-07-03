import { Component } from '@angular/core';

import{faFacebookF,faTwitter,faGoogle,faInstagram,faLinkedinIn,faGithub,faWolfPackBattalion}from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  facebook=faFacebookF;
  twitter=faTwitter;
  google=faGoogle;
  instagram=faInstagram;
  linkdin=faLinkedinIn;
  github=faGithub;
  wolf=faWolfPackBattalion;
 

}
