import { Component, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ZikoUIElement } from 'ziko';

@Component({
  selector: 'app-ziko-ui',
  template: `<div data-engine="zikojs"></div>`,
})
export class ZikoUIComponent implements OnInit, OnDestroy {
  @Input() ui!: ZikoUIElement;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.renderUI();
  }

  ngOnDestroy(): void {
    if (this.ui instanceof ZikoUIElement) {
      this.ui.unrender();
    }
  }

  private renderUI(): void {
    const container = this.elRef.nativeElement.querySelector('div');
    if (container && this.ui instanceof ZikoUIElement) {
      container.innerHTML = '';
      container.appendChild(this.ui.element);
    }
  }
}
