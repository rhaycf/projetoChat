import { Component } from "@angular/core";

@Component({
    selector: 'app-messages',
    template: `
    <div class="row">
    <app-message-input></app-message-input>
    </div>
    <hr/>
    <div class="row">
        <app-message-list></app-message-list>
        </div> 
        `
    })
    export class MessagesComponent {
        
    }
    
    
/*     <strong class="col-md-8 col-md-offset-2">== Após Reestruturação ==</strong>
    <strong class="col-md-8 col-md-offset-2">== Com messageBinging ==</strong> */