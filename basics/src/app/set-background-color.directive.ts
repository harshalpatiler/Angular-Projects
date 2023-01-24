import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackgroundColor]'
})
export class SetBackgroundColorDirective implements OnInit {

  constructor(public elementForColor:ElementRef, private render:Renderer2) {

         }
  ngOnInit(){
    this.render.setStyle(this.elementForColor.nativeElement,'backgroundColor','red')
  }

}
