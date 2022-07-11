import { CommonService, RootData } from './../../services/common.service';
import { filter, map, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.css']
})
export class ReceivingComponent implements OnInit, OnDestroy {
  
  subjectData!:RootData[];
  subscription!:Subscription;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
   this.subscription = this.commonService.subject
    .pipe(
      map(users=>users.filter(user => user.id <2))
      )
    .subscribe((data:RootData[])=>{
      console.log(data);
      this.subjectData = data.filter((v:RootData)=> v.id<5);
    })
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }

}
