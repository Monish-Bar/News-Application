import { Component, OnInit } from '@angular/core';
import { BmnewsapiService } from '../service/bmnewsapi.service';
@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api: BmnewsapiService) { }
  //display headlines data

  topHeadlinesData: any = [];
  ngOnInit(): void {
    this.api.bmHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.topHeadlinesData = result.articles;
    })
  }

}
