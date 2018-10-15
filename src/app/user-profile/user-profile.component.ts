import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

	User = {
	  name : 'Doe',
	  firstName : 'John',
	  age : "25",
	  quote : 'Je suis le roi du monde !',
	  photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
	};
	allo = true;



  constructor() { }

  ngOnInit() {
  }

  onClickMe(){
 	if (this.allo == false)
	{
		this.allo = true;
	}
	else
	{
		this.allo = false;
	}
  }

}
