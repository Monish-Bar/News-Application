import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BmnewsapiService {


  constructor(private _http: HttpClient) { }

  //topheadlinesapiurl
  topHeadlineNews = "https://newsapi.org/v2/top-headlines?country=in&apikey=1c5e2237fcd342bf86e1cc62c9d23654";
  // tech News Api Url
  techNews = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=1c5e2237fcd342bf86e1cc62c9d23654";
  // Buiness News Api Url
  buzzNews = "https://newsapi.org/v2/top-headlines?country=in&category=business&apikey=1c5e2237fcd342bf86e1cc62c9d23654";
  // Health News Api url
  healthNews = "https://newsapi.org/v2/top-headlines?country=in&category=health&apikey=1c5e2237fcd342bf86e1cc62c9d23654";
  // Science News Api Url
  scienceNews = "https://newsapi.org/v2/top-headlines?country=in&category=science&apikey=1c5e2237fcd342bf86e1cc62c9d23654";
  // Entertainment News Api url
  entertainmentNews = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apikey=1c5e2237fcd342bf86e1cc62c9d23654";
  // Sports News Api url
  sportsNews = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apikey=1c5e2237fcd342bf86e1cc62c9d23654";
  bmHeadlines(): Observable<any> {
    return this._http.get(this.topHeadlineNews);
  }

  tcTechNews(): Observable<any> {
    return this._http.get(this.techNews);
  }

  buBuzzNews(): Observable<any> {
    return this._http.get(this.buzzNews);
  }

  heHelNews(): Observable<any> {
    return this._http.get(this.healthNews);
  }

  scSciNews(): Observable<any> {
    return this._http.get(this.scienceNews);
  }

  enEntNews(): Observable<any> {
    return this._http.get(this.entertainmentNews);
  }

  spSptNews(): Observable<any> {
    return this._http.get(this.sportsNews);
  }

}
