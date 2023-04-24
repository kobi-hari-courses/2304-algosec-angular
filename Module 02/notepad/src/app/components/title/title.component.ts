import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-title', 
    templateUrl: './title.component.html', 
    styleUrls: ['./title.component.css'], 
})
export class TitleComponent {
    @Input()
    caption: string = 'Notepad, mamatsav';

    @Input()
    color: string = 'green';

    private _pressedCount: number = 0;

    @Output()
    pressed = new EventEmitter<number>();

    onPress() {
        this._pressedCount++;
        this.pressed.emit(this._pressedCount);

    }
}


