import { Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

@Component({
    templateUrl: './etelic.input.html',
    selector: "etelic-input"
})
export class EtelicInput {
    eValueColl = [];
    addInput(eValue: string) {
        if (eValue) {
            this.eValueColl.push(eValue);
            console.log(eValue);
        }
    }
}  