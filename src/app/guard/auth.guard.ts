import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export const authGuard: CanActivateFn = (route, state) => {
  constructor(private service: AuthService,private router:Router,private toastr:ToastrService){
    return true;
  }
 
};
