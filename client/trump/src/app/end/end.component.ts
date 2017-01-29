import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  score : number = 0;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.score = params['score'];
    });
  }
}
