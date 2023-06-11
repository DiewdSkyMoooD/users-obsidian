import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css'],
})
export class InfoUserComponent{
  //observer with info of user, using the seed and index like a id of a normal api
  user$:Observable<any> = this.usersService.getUserById(
    Number(this.route.snapshot.paramMap.get('index')),
    { results: 25, seed: this.route.snapshot.paramMap.get('seed') }
  );

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {
  }

  //change gender in spanish
  gender(gender:string){
    return gender='felame'?'Mujer':'Hombre';
  }

}
