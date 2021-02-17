import { Component, OnInit } from '@angular/core';
import { LigaNosService } from '../liga-nos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from 'ng-connection-service';


@Component({
  selector: 'app-liga-nos',
  templateUrl: './liga-nos.page.html',
  styleUrls: ['./liga-nos.page.scss'],
})
export class LigaNosPage implements OnInit {
  futebol: {};
  url: string = 'pl';
  coment: string;
  todos = [];
  status = 'ONLINE';
  isConnected = true;

  constructor(
    private futebolService: LigaNosService,
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
