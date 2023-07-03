import { Component, AfterViewInit,ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTable } from '@angular/material/table';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private service:AuthService,private dialog:MatDialog){
this.Loaduser();
  }
  admin:any;
  dataSource:any;
@ViewChild(MatPaginator) paginator !:MatPaginator;
@ViewChild(MatSort) sort!:MatSort;
  Loaduser(){
    this.service.GetAll().subscribe(res =>{
      this.admin= res;
      this.dataSource=new MatTableDataSource(this.admin);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  displayedColumns: string[] = ['username', 'name', 'role','email', 'status','action'];

  UpdateUser(code:any){
 const popap=this.dialog.open(UpdatepopupComponent,{
  enterAnimationDuration:'1000ms',
  exitAnimationDuration:'500ms',
  width:'50%',
  data:{
    usercode:code
  }
})
popap.afterClosed().subscribe(res =>{
  this.Loaduser();
})
  }
  opendialog(){

  }

}
