import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
@Injectable({
  providedIn: 'root'
})
export class GameService {
questions: any;
scores: any;
i:number=-1;
  constructor(private http: HttpClient, private Router: Router) {}
  score: number=0;
  name: string;
  getAllQuestions(){
  this.http.get("http://localhost:5000/questions").subscribe(response=>(this.questions=response));
  }
  randomize(){
     this.questions.sort(() => 0.5 - Math.random());
  }
  getQuestions(){
    if(this.i>=14){
      this.Router.navigate(['/end']);
      this.i=-1
    }else{
    
    this.i++;
    return (this.questions[this.i]);
    }
  }
  addPoints(points){
    this.score+= points;
    console.log(this.score);
  }
  getAllScores(){
    this.http.get("http://localhost:5000/scores").subscribe(response=>((this.scores=response)));
    return this.scores
    }
    setName(name){
  this.name= name;
      console.log (this.name)
      this.Router.navigateByUrl('/game');
    }
    getScore(){
      return this.score;
    }
    getName(){
      return this.name;
    }
    getScoreList(){
      return this.scores;
    }
    updateScoreList(){
    let score=this.score;
      let name=this.name;
      return this.http.post("http://localhost:5000/scores", {name, score}).subscribe(response=>((this.scores=response)));

    }
}