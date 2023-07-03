import { Component } from '@angular/core';
import{faFacebookF,faTwitter,faGoogle,faInstagram,faLinkedinIn,faGithub,faWolfPackBattalion}from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  wolf=faWolfPackBattalion;
  facebook=faFacebookF;
  twitter=faTwitter;
  google=faGoogle;
  instagram=faInstagram;
  linkdin=faLinkedinIn;
  github=faGithub;
}
