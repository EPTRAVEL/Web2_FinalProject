import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noidungtintuc',
  templateUrl: './noidungtintuc.component.html',
  styleUrls: ['./noidungtintuc.component.css']
})
export class NoidungtintucComponent implements OnInit {

  selectedId:any;

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      let tintuc_id=param.get('tintuc_id');
      if(tintuc_id!=null)
         this.selectedId=parseInt(tintuc_id);
    })

  }

    goBack():void{
      this.router.navigate(['/tintuc',{id:this.selectedId}])
    }
}
