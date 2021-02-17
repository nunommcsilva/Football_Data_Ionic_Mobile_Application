import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipaNosService } from '../equipa-nos.service';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-equipa-nos',
  templateUrl: './equipa-nos.page.html',
  styleUrls: ['./equipa-nos.page.scss'],
})
export class EquipaNosPage implements OnInit {

  equipa: {}
  status = 'ONLINE';
  isConnected = true;

  constructor(
    private equipaService: EquipaNosService,
    private route: ActivatedRoute,
    private connectionService: ConnectionService,
  ) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";
      }
    })
  }

  ngOnInit() {
    this.getEquipa()
  }

  getEquipa(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.equipaService.getEquipa(id)
      .subscribe(equipa => this.equipa = equipa);
  }
}
