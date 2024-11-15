import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ChangerMotDePasseUtilisateurDto} from '../../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto';
import {UserService} from '../../../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';passwordForm: FormGroup;

  

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  ancienMotDePasse = '';
  errorMessage='';

  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
   
    
    
  
  }

  cancel(): void {
    this.router.navigate(['profil']);
  }

  changerMotDePasseUtilisateur(): void {
    
    this.userService.changerMotDePasse(this.changerMotDePasseDto)
    .subscribe(data => {
      
      this.router.navigate(['profil']);
    }
  ,);
    
  
}
}