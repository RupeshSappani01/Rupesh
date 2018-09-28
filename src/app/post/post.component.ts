import { Component, OnInit } from '@angular/core';
import { WallService } from '../servicefiles/wall.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  formData=new FormData();
  photo: File;
  filelength: any;
  video: File;
  constructor(private WallService:WallService) { }

  ngOnInit() {
  }
  UploadPostImage(event){
    this.filelength=event.target.files.length;
    if(event.target.files.length>1){
       for(let i=0;i<event.target.files.length;i++){
         this.formData.append('Images',event.target.files[i],event.target.files[i].name);
       }
    } else{
      var extension = event.target.files[0].name.split(".");
      const filename=extension[extension.length-1]
      if(filename==='.mp4'){
        this.video=<File>event.target.files[0];
        this.formData.append('video',this.video,this.video.name);
      } else{
      this.photo=<File>event.target.files[0];
      console.log(this.photo.name);
      this.formData.append('Image',this.photo,this.photo.name);
      }
    }
  }
  PostTheData(postdata){
    debugger
   const obj={
     title:postdata.value.title,
     description:postdata.value.description
   }
   if(postdata.value.postimages===''){
     this.formData.append('obj',JSON.stringify(obj));
     this.WallService.post_the_no_image_data(this.formData).subscribe(data=>{
       if(data.objReturn='Success'){
         postdata.form.reset();
       }
     })
   } else if(this.filelength>1){
    this.formData.append('obj',JSON.stringify(obj));
     this.WallService.post_the_multiple_data(this.formData).subscribe(data=>{
      if(data.objReturn='Success'){
        postdata.form.reset();
      }
     })
   } else{
    var extension =postdata.value.postimages.split(".");
    const filename=extension[extension.length-1]
    if(filename==='.mp4'){
      this.formData.append('obj',JSON.stringify(obj));
      this.WallService.post_the_video_data(this.formData).subscribe(data=>{
        if(data.objReturn='Success'){
          postdata.form.reset();
        }
      })
    } else{
    this.formData.append('obj',JSON.stringify(obj));
    this.WallService.post_the_wall_data(this.formData).subscribe(data=>{
      if(data.objReturn='Success'){
        postdata.form.reset();
      }
    })
  }
   }
   }
}
