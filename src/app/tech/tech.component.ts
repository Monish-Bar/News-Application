import { Component, OnInit } from '@angular/core';
import { BmnewsapiService } from '../service/bmnewsapi.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  constructor(private api: BmnewsapiService) { }

  techNewsData: any = [];

  ngOnInit(): void {
    this.api.tcTechNews().subscribe((result) => {
      console.log(result.articles);
      this.techNewsData = result.articles;
    })
  }
}
