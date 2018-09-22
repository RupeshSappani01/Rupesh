import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../servicefiles/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginstatus;
  constructor(private RegisterService:RegisterService) { }

  ngOnInit() {
  }
  postTheLoginData(value){
    const obj={
      mobile:value.mobile,
      password:value.password
    }
    this.RegisterService.postTheLoginData(obj).subscribe(data=>{
      this.loginstatus=data;
      if(this.loginstatus.objReturn==='Success'){
        alert('success');
      }else{
        alert('sorry mobile or password not matching');
      }
    })
  }
}
