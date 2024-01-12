import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth.service";
import {  ToastrService } from "ngx-toastr";

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
  constructor(private service:AuthService,private router:Router,private toastr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |UrlTree {
      if(this.service.IsloggedIn()){
        return true;
      }else{
        this.router.navigate(['login']);
        return false;
      }
    return true;
  }
  
}