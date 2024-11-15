import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from '../../../gs-api/src/services/utilisateurs.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent implements OnInit {

  constructor(
    private utilisateurService:UtilisateursService,
    private router:Router

  ){}

  ngOnInit(): void {
  }
  ModifierUtilisateur(){
    console.log("test")



  }


}
