import { Component, OnInit } from '@angular/core';
import { BmnewsapiService } from '../service/bmnewsapi.service';
@Component({
  selector: 'app-buiness',
  templateUrl: './buiness.component.html',
  styleUrls: ['./buiness.component.css']
})
export class BuinessComponent implements OnInit {

  constructor(private api: BmnewsapiService) { }
  buzzzNewsData: any = [];
  ngOnInit(): void {
    this.api.buBuzzNews().subscribe((result) => {
      console.log(result.articles);
      this.buzzzNewsData = result.articles;
    })

  }

}
