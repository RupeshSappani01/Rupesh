import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../servicefiles/register.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  wallpost:any;

  constructor(private RegisterService:RegisterService) { }

  ngOnInit() {
    this.RegisterService.getImage().subscribe(data=>{
      this.wallpost=data;
      console.log(this.wallpost);
    })
  }

}
