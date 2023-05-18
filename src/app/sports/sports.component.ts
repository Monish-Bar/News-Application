import { Component, OnInit } from '@angular/core';
import { BmnewsapiService } from '../service/bmnewsapi.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private api: BmnewsapiService) { }
  sportNewsData: any = [];
  ngOnInit(): void {
    this.api.spSptNews().subscribe((result) => {
      console.log(result.articles);
      this.sportNewsData = result.articles;
    })

  }

}

