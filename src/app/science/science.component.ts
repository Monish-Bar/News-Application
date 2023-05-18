import { Component, OnInit } from '@angular/core';
import { BmnewsapiService } from '../service/bmnewsapi.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private api: BmnewsapiService) { }
  scienceNewsData: any = [];
  ngOnInit(): void {
    this.api.scSciNews().subscribe((result) => {
      console.log(result.articles);
      this.scienceNewsData = result.articles;
    })

  }

}

