import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

	@HostBinding('style.backgroundColor') myBackgroundColor : string;

  constructor() { }

  ngOnInit() {
  	//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseEnterEvent(eventDate:Event){
  	this.myBackgroundColor='yellow';
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventDate:Event){
  	this.myBackgroundColor='yellow';
  }

}
