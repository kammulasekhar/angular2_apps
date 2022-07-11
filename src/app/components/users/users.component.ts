import { map } from 'rxjs';
import { CommonService, RootData } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users?:RootData[];
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getPostData()
    .pipe(
      map(data=>data.filter(v=>v.id<10))
    )
    .subscribe((data:RootData[])=>{
      this.users = data;
    })
  }

}
