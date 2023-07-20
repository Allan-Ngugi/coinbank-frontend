// buynft.component.ts
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'coinbank-buynft',
  templateUrl: './buynft.component.html',
  styleUrls: ['./buynft.component.scss'],
})
export class BuynftComponent implements AfterViewInit {
  @ViewChild('op') op!: OverlayPanel | undefined; // Add union type with undefined

  constructor() {}

  ngAfterViewInit(): void {
    // The p-overlayPanel element is available here
    // You can perform any initialization or checks related to the element
  }

  showOverlayPanel() {
    this.op?.toggle(true); // Use safe navigation operator
  }
}
