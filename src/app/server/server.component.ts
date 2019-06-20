import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            background-color: black;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10
    serverStatus: string = Math.random() > 0.5 ? 'online' : 'offline'

    
    public getServerStatus() : string {
        return this.serverStatus
    }
    
    getColor() {
        return this.serverStatus === "offline" ? 'red' : 'green'
    }

}