import { Component } from '@angular/core';
import{ faWolfPackBattalion,faConnectdevelop} from '@fortawesome/free-brands-svg-icons';
import{faEnvelope,faPhone}from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
wolf=faWolfPackBattalion;
mail=faEnvelope;
phone=faPhone;
}
