import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  
  constructor(private game: GameService) { }
  points: number = 500;
  question: any;
  ngOnInit() {
    this.game.randomize();
 this.question = this.game.getQuestions();
  }
  selectOption(option){
    // console.log(option);
    // console.log(this.question.name)
    if (option === this.question.name){
      this.game.addPoints(this.points);
      this.points= 500;
      this.question = this.game.getQuestions();
    }else{
      if (this.points===500){
        this.points=200;
      }else if (this.points===200){
        this.points=100;
      }else if (this.points===100){
        this.question = this.game.getQuestions();
        this.points=500;
      }
    }
  }
  
}
 


