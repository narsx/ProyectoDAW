import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Person } from '../models/person.model';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
public person:Person = new Person();
  constructor(private activeRoute: ActivatedRoute,private peopleSv:PeopleService) {

    this.activeRoute.params.subscribe( parm => {
      console.log(parm.id)

      console.log(parm.job)
    })
    
    this.activeRoute.params.pipe(switchMap (({id}) => this.peopleSv.getPerson(id))
      ).subscribe(async reward => {
    
        this.person = reward
       
      });

  }

  ngOnInit() {
    
  }

}
