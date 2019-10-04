import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.css']
})
export class EndPageComponent implements OnInit {

  constructor(private game: GameService) { }
  score: any;
  Scores: any;
  ngOnInit() {
    this.score=this.game.getScore();
    console.log(this.game.getName());
   this.Scores=this.game.getScoreList();
   this.game.updateScoreList()
  }

}
