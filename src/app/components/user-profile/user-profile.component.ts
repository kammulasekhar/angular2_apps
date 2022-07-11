import { CommonService, RootData } from './../../services/common.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId!:number;
  declare user: RootData;
  constructor(private activatedRoute:ActivatedRoute, private commonService:CommonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data['id']);
      this.userId = +data['id'];
    })

    this.commonService.getOneUser(this.userId)
    .subscribe((data:RootData)=>{
      console.log(data)
      this.user = data;
    })


  }

}
