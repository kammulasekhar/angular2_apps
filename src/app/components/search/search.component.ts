import { map, filter } from 'rxjs';
import { CommonService, RootData } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue2:any;
  totalData?:RootData[];
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getPostData().pipe(
    map(data=>data.filter(v => v.id<10))
    )
    .subscribe((data:RootData[])=>{
      console.log(data);
      this.totalData = data;
    })
  }

  onSearch(searchValue:any){
    console.log(searchValue)
    if(!searchValue){
      this.ngOnInit();
    }
    this.totalData = this.totalData?.filter((v)=>{
      return (v.title.toLocaleLowerCase().match(searchValue))
    })
  }

  onSearch2(){
    console.log("Ddd")
    if(!this.searchValue2){
      this.ngOnInit();
    }
    this.totalData = this.totalData?.filter((v)=>{
      return (v.title.toLocaleLowerCase().match(this.searchValue2))
    }) 
  }
}
