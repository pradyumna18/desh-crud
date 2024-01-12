import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {



  constructor(private service:AuthService){
     this.Loaduser();
  }
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  userList:any;
  Loaduser(){
    this.service.getAll().subscribe(res=>{
      this.userList=res;
      this.dataSource=new MatTableDataSource(this.userList);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }
  displayedColumns: string[] = ['username', 'name', 'email','role', 'status','action'];
  dataSource:any;


  UpdateUser(code:any){
      
  }
}
