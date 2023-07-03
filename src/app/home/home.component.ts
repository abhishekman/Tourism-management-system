import { Component } from '@angular/core';
import{faFacebookF,faTwitter,faGoogle,faInstagram,faLinkedinIn,faGithub,faWolfPackBattalion}from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
wolf=faWolfPackBattalion;
facebook=faFacebookF;
twitter=faTwitter;
google=faGoogle;
instagram=faInstagram;
linkdin=faLinkedinIn;
github=faGithub;

}
