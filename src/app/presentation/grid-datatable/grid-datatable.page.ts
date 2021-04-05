import { Component, OnInit } from '@angular/core';
import { SortDirection } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-grid-datatable',
  templateUrl: './grid-datatable.page.html',
  styleUrls: ['./grid-datatable.page.scss'],
})
export class GridDatatablePage implements OnInit {
  page = 0;
  resultsCount = 10;
  totalPages = 0;

  
  data = [];
  bulkEdit = false;
  edit = {};

  sorDirection=0;
  sortKey=null;
  collections: any[];
  


  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    fetch('./assets/data/users.json').then(res => res.json())
      .then(json => {        
        this.data = json;
        this.resultsCount= 3;
        this.totalPages= 2
        this.sort();
      });
  }

  sortBy(value){
    this.sortKey=value;
    this.sorDirection++;
    this.sort();
  }

  sort(){
    if( this.sorDirection == 1 || this.sorDirection > 2 ){
      if( this.sorDirection > 2 ){
        this.sorDirection = 0;  
      }
      this.data = this.data.sort((a,b) => {
        console.log('a:',a);
        const valA = a[this.sortKey]
        const valB = b[this.sortKey]
        return valA.localeCompare(valB);
      });
    }else if( this.sorDirection == 2 ){
      this.data = this.data.sort((a,b) => {
        const valA = a[this.sortKey]
        const valB = b[this.sortKey]        
        return valB.localeCompare(valA);
      });
    }else{
      this.sorDirection = 0;
      this.sortKey = null;
    }
  }

  nextPage (){
    this.page++;
  }

  prevPage (){
    this.page++;
  }

  goFirst (){
    this.page = 0;
    this.loadData();
  }

  goLast (){
    this.page = this.totalPages-1;
    this.loadData();
  }
}
