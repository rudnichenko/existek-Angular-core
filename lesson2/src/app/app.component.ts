import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  color:string = 'aqua';

  listNumbers:Array<string> = ['1', '2', '3'];
  listColors:Array<string> = ['red', 'green', 'blue'];

  showBlue:boolean = false;

  handleClick() {
    this.listColors.push(this.color);
    // need to renew list in binding
  }

  paintBoxes() {
    let rand = this.getRandomIntInclusive(0, this.listColors.length-1);
    const boxes = document.querySelectorAll('.sampleDiv');

    boxes.forEach(box => {
      box.setAttribute('style', 'background-color: ' + this.listColors[rand]);
    });
  }

  getRandomIntInclusive(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются (взято с MDN)
  }
}
