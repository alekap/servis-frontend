import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    selectedOption: string;
  printedOption: string;

  options = [
    { name: "option1", value: 1 },
    { name: "option2", value: 2 }
  ]
  print() {
    this.printedOption = this.selectedOption;
    console.log("My input: ", this.selectedOption);
  }

}