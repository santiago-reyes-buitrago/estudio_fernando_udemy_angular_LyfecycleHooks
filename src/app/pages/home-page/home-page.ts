import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  constructor() {
    console.log('HomePage');
  }

  ngOnInit(){
    console.log("ngOnInit - Runs once after Angular has initialized all the component's inputs.")
  }
  ngOnChanges(){
    console.log("ngOnChanges - Runs every time the component's inputs have changed.")
  }
  ngDoCheck(){
    console.log("ngDoCheck - Runs every time this component is checked for changes.")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit - Runs once after the component's content has been initialized.")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked - Runs every time this component content has been checked for changes.")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit - Runs once after the component's view has been initialized.")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked - Runs every time the component's view has been checked for changes.")
  }

}
