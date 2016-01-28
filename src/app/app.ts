import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app',
  styles: [ require('./app.less') ],
  templateUrl: './app/app.html'
})

export class App {

  private ref: Firebase;

  public rates: Object;

  public time: any;

  constructor() {
    this.ref = new Firebase('https://publicdata-cryptocurrency.firebaseio.com/');
  }

  ngOnInit() {

    console.log('App loaded!!');

    let sync = new Observable(o => {
      this.ref.on('value', function(snapshot) {
        o.next(snapshot.val());
        //console.log(snapshot.val());
      });
    }).subscribe(r => this.rates = r);

    // let timer = new Observable(o => {
    //   setInterval(function() {
    //     let time = new Date();
    //     o.next(time);
    //     // console.log(time);
    //   }, 1000);
    // }).subscribe(t => this.time = t);

  }

}
