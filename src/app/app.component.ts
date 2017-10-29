import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let ScrollMagic: any;
declare let TweenMax: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  controller: any;

  ngOnInit() {
    // init controller
    this.controller = new ScrollMagic.Controller();
  }

  ngAfterViewInit() {
    const scene = new ScrollMagic.Scene({
        triggerElement: '#trigger1'
      })
      .setTween('#animate1', 0.5, {backgroundColor: 'green', scale: 2.5}) // trigger a TweenMax.to tween
      .addIndicators({name: '1 (duration: 0)'}) // add indicators (requires plugin)
      .addTo(this.controller);
  }
}
