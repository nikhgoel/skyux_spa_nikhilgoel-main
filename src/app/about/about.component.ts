import {
  Component, OnInit
} from '@angular/core';

import { Http, Response } from '@angular/http';


@Component({
  selector: 'my-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  result : any;
  errorFromSubscribe : any;
  errorFromCatch : any;
  displayItems : any;
  data : any;
  email : any;
  constructor(private http: Http) { }
  ngOnInit(): void {
    this.http.get('http://localhost:3007/posts')
    .subscribe((res: Response) => {
      this.result = res.json();
      this.displayItems = this.result;
      console.log(this.displayItems);
    }, error => {
      console.log(error);
      this.errorFromSubscribe = error;
    });
    
  }

  public Clicked(){
    this.data =  [];
    this.email = [];
    for(var i =0 ; i < this.displayItems.length ; i++){
      this.data.push(this.displayItems[i].name);
      this.email.push(this.displayItems[i].email);
    }
  }

  public team: { name: string; email: string; }[] = [
    {
      name: 'Robert Hernandez',
      email: 'rh@edu.org'
    },
    {
      name: 'Samantha Jones',
      email: 'sam@jones.com'
    },
    {
      name: 'Michael Jordan',
      email: 'michael@jordon.net'
    }
  ];
}
