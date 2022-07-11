import { CommonService, RootData } from './../../services/common.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-sending',
  templateUrl: './sending.component.html',
  styleUrls: ['./sending.component.css']
})
export class SendingComponent implements OnInit, OnDestroy {

  apiData?:RootData[];
  subscription?:Subscription;
  constructor(private CommonService:CommonService) { }

  ngOnInit(): void {
    this.subscription = this.CommonService.getPostData()
    .pipe(
      map(users=>users.filter(user => user.id <20))
    )
    .subscribe((data:RootData[])=>{
      this.apiData = data;
      this.CommonService.subject.next(this.apiData);
    })
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }

}
