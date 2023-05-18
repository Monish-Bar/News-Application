import { Component, OnInit } from '@angular/core';
import { BmnewsapiService } from '../service/bmnewsapi.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private api: BmnewsapiService) { }
  healthNewsData: any = [];
  ngOnInit(): void {
    this.api.heHelNews().subscribe((result) => {
      console.log(result.articles);
      this.healthNewsData = result.articles;
    })

  }

}
