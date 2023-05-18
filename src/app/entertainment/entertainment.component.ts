import { Component, OnInit } from '@angular/core';
import { BmnewsapiService } from '../service/bmnewsapi.service';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private api: BmnewsapiService) { }
  entertainmentNewsData: any = [];
  ngOnInit(): void {
    this.api.enEntNews().subscribe((result) => {
      console.log(result.articles);
      this.entertainmentNewsData = result.articles;
    })

  }

}
