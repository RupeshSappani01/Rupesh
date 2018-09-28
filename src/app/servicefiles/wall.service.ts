import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllModelsOBJ } from '../../models/allobjectsmodel';
@Injectable({
  providedIn: 'root'
})
export class WallService {

  constructor(private _http:HttpClient) { }
  post_the_wall_data(formdata):Observable<AllModelsOBJ>{
   return this._http.post<AllModelsOBJ>('http://localhost:3000/wall/uploadimage',formdata);
  }
  post_the_multiple_data(formdata):Observable<AllModelsOBJ>{
    return this._http.post<AllModelsOBJ>('http://localhost:3000/wall/uploadmultipleimages',formdata);
  }
  post_the_no_image_data(formdata):Observable<AllModelsOBJ>{
    return this._http.post<AllModelsOBJ>('http://localhost:3000/wall/noimageonlydata',formdata);
  }
  post_the_video_data(formdata):Observable<AllModelsOBJ>{
    return this._http.post<AllModelsOBJ>('http://localhost:3000/wall/uploadvideo',formdata);
  }
}
