import {Component, Input, OnInit} from '@angular/core';
import {ClientDto} from '../../../gs-api/src/models/client-dto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-cmd-clt-frs',
  templateUrl: './detail-cmd-clt-frs.component.html',
  styleUrls: ['./detail-cmd-clt-frs.component.scss']
})
export class DetailCmdCltFrsComponent implements OnInit {
  
  @Input()
  origin = '';
  @Input()
  commande: any = {};
  cltFrs: ClientDto | undefined = {};

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.extractClientFournisseur();
  }

  modifierClick(): void {
    this.router.navigate(['modifiercltclient']);
    
  }

  extractClientFournisseur(): void {
    if (this.origin === 'client') {
      this.cltFrs = this.commande?.client;
    } else if (this.origin === 'fournisseur') {
      this.cltFrs = this.commande.fournisseur;
    }
  }
}
