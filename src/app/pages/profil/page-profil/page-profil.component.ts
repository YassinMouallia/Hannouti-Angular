import { Component, Inject, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UtilisateurDto } from 'src/gs-api/src/models';

import { EntrepriseDto } from 'src/gs-api/src/models';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss'],
  providers:[UserService,EntrepriseService]
})
export class PageProfilComponent implements OnInit {
  connectedUser: UtilisateurDto = {};
  email : string|any =this.UserService.getConnectedUser().email;
  EnterpriseDTO:EntrepriseDto={};
  constructor(
    private router: Router,
    private UserService: UserService,
  ) { }

  ngOnInit(): void {
    this.getuserinfo();
  }
  getuserinfo ():void {
    
    this.UserService.getUserByEmail(this.email).subscribe(UserDto=>{
      this.connectedUser=UserDto;
    
    })
  }

  modifierMotDePasse(): void {
    this.router.navigate(['changermotdepasse']);
  }

  modifierProfile():void{
    
    this.router.navigate(['modifierprofil']);
  }
  
}
