import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class CommonService {
   public tempData = "Hello World";
   public data : any = [];
   public observerData = new BehaviorSubject<object[]>([]);
}