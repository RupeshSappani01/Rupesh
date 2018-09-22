import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../servicefiles/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerstatus:any;
  errormsg:string;
  successmsg:string;
  showerror=false;
  genderdefault=0;
  showerror1=false;
  constructor(private RegisterService:RegisterService) { }

  ngOnInit() {
  }
  postGegisterData(value){
    const obj={
      name:value.name,
      email:value.email,
      mobile:value.mobile,
      gender:value.gender,
      password:value.password,
    }
    console.log(obj);
    this.RegisterService.PostTheRegisterData(obj).subscribe(data=>{
      this.registerstatus=data
      if(this.registerstatus.objReturn==='Mobile number already register'){
        this.showerror=true;
        this.errormsg=this.registerstatus.objReturn;
      }
      else if(this.registerstatus.objReturn==='Email already registered'){
        this.showerror=true;
        this.errormsg=this.registerstatus.objReturn;
      }
      else if(this.registerstatus.objReturn==='Success'){
        this.showerror=false;
        this.showerror1=true;
        this.successmsg="Registered Successfully";
      } else{
        this.showerror=false;
        this.errormsg="Something went wrong";
      }
    })
  }
}
