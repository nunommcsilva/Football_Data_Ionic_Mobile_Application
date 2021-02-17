import { Component, OnInit } from '@angular/core';
import { LigaChampionsService } from '../liga-champions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from 'ng-connection-service';


@Component({
  selector: 'app-liga-champions',
  templateUrl: './liga-champions.page.html',
  styleUrls: ['./liga-champions.page.scss'],
})
export class LigaChampionsPage implements OnInit {
  futebol: {};
  url: string = 'lc';
  coment: string;
  todos = [];
  status = 'ONLINE';
  isConnected = true;

  constructor(
    private futebolService: LigaChampionsService,
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
    this.getCurrentFutebol();
    this.route.url.subscribe((event) => this.getCurrentFutebol());

  }

// Não permite comentários em branco
submitComent() {
  if (this.coment.length > 0 && this.coment.trim() != '') {
    this.todos.push(this.coment);
    this.coment = '';
  }
}

  getCurrentFutebol(): void {
    this.url = this.route.snapshot.paramMap.get('url');
    this.futebolService.getCurrentFutebol(this.url).subscribe(futebol => this.futebol = futebol);
  }

}
