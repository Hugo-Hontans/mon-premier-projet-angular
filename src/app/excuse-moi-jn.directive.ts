import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core'

@Directive({
  selector: '[appExcuseMoiJN]'
})
export class ExcuseMoiJNDirective implements OnInit {

	@HostBinding('class.monStyle') condition:boolean;

  constructor() { }

  ngOnInit() {}

  @HostListener('mouseenter') mouseEnterEvent(eventDate:Event){
  	this.condition = true;
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventDate:Event){
  	this.condition = false;
  }

}
