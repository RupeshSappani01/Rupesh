import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../servicefiles/register.service';

@Component({
  selector: 'app-profileheader',
  templateUrl: './profileheader.component.html',
  styleUrls: ['./profileheader.component.css']
})
export class ProfileheaderComponent implements OnInit {
  wallpost: any;

  constructor(private RegisterService:RegisterService) { }

  ngOnInit() {
    this.RegisterService.getImage().subscribe(data=>{
      this.wallpost=data;
      console.log(this.wallpost);
    })
  }

}
