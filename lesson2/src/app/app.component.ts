import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  color:string = 'aqua';
  rand:number = 0;

  listNumbers:Array<string> = ['1', '2', '3'];
  listColors:Array<string> = ['red', 'green', 'blue'];

  showBlue:boolean = false;

  handleClick() {
    this.listColors.push(this.color);
  }

  randomColor() {
    this.rand = this.getRandomIntInclusive(0, this.listColors.length-1);
  }

  getRandomIntInclusive(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются (взято с MDN)
  }
}