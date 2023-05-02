import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    id: number;
    records: string[] = [];


    constructor() {
        this.id = Math.ceil(Math.random() * 100000);
        console.log('History service is created with id ', this.id);
    }

    audit(txt: string) {
        this.records.push(txt);
        console.log('history', this.records);
    }

}