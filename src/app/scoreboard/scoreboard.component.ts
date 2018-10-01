import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../servicefiles/register.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  obj: any;
  image: any;

  constructor(private RegisterService:RegisterService) { }

  ngOnInit() {
  // this.RegisterService.getImage().subscribe(data=>{
  //   this.obj=data;
  //   console.log(this.obj);
  // })

  }

}
