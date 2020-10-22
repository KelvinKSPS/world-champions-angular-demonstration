import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidi-example',
  templateUrl: './sidi-example.component.html',
  styleUrls: ['./sidi-example.component.scss']
})
export class SidiExampleComponent implements OnInit {
  worldChampionship: any;
  team: string;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.team = params.team;
    });
    this.worldChampionship = [
      {
        team: 'Corinthians',
        instances: [{ location: 'brazil', year: '2000' }, { location: 'japan', year: '2012' }]
      },
      {
        team: 'Palmeiras',
        instances: [{ location: 'brazil', year: '1951' }]
      }
    ];
    console.log(this.team);
    console.log(this.worldChampionship);
    this.worldChampionship = !this.team ?
      this.worldChampionship :
      this.worldChampionship.filter(
        instance => instance['team'].toLowerCase().includes(this.team.toLowerCase())
      );
  }

}
