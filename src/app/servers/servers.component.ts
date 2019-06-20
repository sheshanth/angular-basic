import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer
    }, 2000);
  }

  ngOnInit() {
  }

  allowNewServer = false

  serverCreationStatus = `No server created.`

  serverName: string

  onCreateServer() {
    this.serverCreationStatus = `Server created!`
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(this.serverName);
  }

}
