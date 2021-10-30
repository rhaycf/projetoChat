import { Http, Response, Headers} from "@angular/http";
import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs";
//import { from } from "core-js/core/array";

@Injectable()
export class MessageService {
    private messageSService: Message[] = [];

    constructor(private http: Http) {}

    addMessage(message: Message) {
        this.messageSService.push(message);
        console.log(this.messageSService);

        const bodyReq = JSON.stringify(message);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => responseRecebida.json())
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    getMessages() {
        return this.messageSService;
    }

    deleteMessage(message: Message) {
        this.messageSService.splice(this.messageSService.indexOf(message), 1);
    }
}