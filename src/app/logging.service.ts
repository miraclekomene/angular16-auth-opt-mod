import { Injectable } from "@angular/core";

// @Injectable({ providedIn: 'root'})
export class LoggingService {
    lostlog: string;

    printLog(message: string){
        console.log(message);
        console.log(this.lostlog);

        this.lostlog = message;
    }

}