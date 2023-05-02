import { Inject, Injectable } from "@angular/core";
import { PREFIX_TOKEN } from "../tokens/prefix.token";
import { NOW_TOKEN } from "../tokens/now.token";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    id: number;
    records: string[] = [];


    constructor(
        @Inject(PREFIX_TOKEN) private prefix: string, 
        @Inject(NOW_TOKEN) private now: () => string
        
        ) {
        this.id = Math.ceil(Math.random() * 100000);
        console.log('History service is created with id ', this.id);
    }

    audit(txt: string) {
        this.records.push(`${this.prefix} ${this.now()} ${txt}`);
        console.log('history', this.records);
    }

}