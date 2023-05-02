import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";
import { Adder } from "./adder.interface";

@Injectable({
    providedIn: 'root'
})
export class AdditionService implements Adder {
    id: number;

    constructor(private history: HistoryService) {
        this.id = Math.ceil(Math.random() * 100000);
        console.log('Addition service is created with id ', this.id);
    }

    add(a: number, b: number): number {
        this.history.audit(`Addition of ${a} and ${b}`);
        return a + b;
    }
}