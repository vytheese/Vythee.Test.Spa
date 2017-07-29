import { Component } from '@angular/core';
import { EtelicInput } from '../Etelic/etelic.input';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title = 'app';
    eValueColl = [];
    addInput(eValue: string) {
        if (eValue) {
            console.log(eValue);
            this.eValueColl.push(eValue);
        }
    }
}
