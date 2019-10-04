import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private game: GameService) { }
  scores: any=[];
  scoreList
  ngOnInit() {
    this.scoreList = this.game.getAllScores();

  this.game.getAllQuestions();
  this.scoreList.forEach(element => {
    this.scores.push(element);
  });
  }
  start(name){
    this.game.setName(name);
  }

}
