import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data/data.service';
import {Router} from '@angular/router';
import {Account} from '../interfaces/account';
import {Result} from '../interfaces/result';

@Component({
  selector: 'app-root',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [DataService]
})

export class AccountComponent implements OnInit {

  public account: Account[];
  public containeritem: Result[];
  public scenarioNum: number;
  constructor(private dataservice: DataService, private router: Router) {}



  ngOnInit() {
	this.scenarioNum = 0;
    this.dataservice.getAccounts().subscribe(
      res => {
        var obj = JSON.parse(res);
        this.account = obj;
      },
      err => {
        console.log("There is an error : " + err);
      } 
    )
  }
 
  public setScenarioNum(val : any){
	  this.scenarioNum = val;   
	  console.log("Value : " + this.scenarioNum);
  }
  
  onSelect(account: Account) {
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['/login']);
    }
    localStorage.setItem('currentAccount', account.Name);
    this.dataservice.getResults(account.AccountNum, this.scenarioNum).subscribe(
      res => {
        var obj = JSON.parse(res);
        this.containeritem = obj;
      },
      err => {
        console.log("There is an error : " + err);
      }
    )
  }
}
