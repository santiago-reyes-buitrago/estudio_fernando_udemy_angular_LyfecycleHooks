import {Component, input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title {
  title = input.required<string>()

  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      const inputValues = changes[change];
      console.log(`Previous ${change} = ${inputValues.previousValue}`);
      console.log(`Current ${change} = ${inputValues.currentValue}`);
      console.log(`Is first ${change} change = ${inputValues.firstChange}`);
    }
  }
}
