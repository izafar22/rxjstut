import { Directive,OnInit,ElementRef,Renderer2,Inject,Input } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Directive({
  selector: '[appRender]'
})
export class RenderDirective implements OnInit {
  @Input() elementval:any;
  constructor(private elementRef: ElementRef,private renderer: Renderer2, @Inject(DOCUMENT) private document) { }

  ngOnInit() {
    const child = document.createElement('li');
    this.renderer.appendChild(this.elementRef.nativeElement, child);
    child.innerHTML=this.elementval;  
    console.log(this.elementval);
  }

}