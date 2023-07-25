// buynft.component.ts
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'coinbank-buynft',
  templateUrl: './buynft.component.html',
  styleUrls: ['./buynft.component.scss'],
})
export class BuynftComponent implements AfterViewInit {
  @ViewChild('op') op!: OverlayPanel | undefined;

  constructor() {}

  ngAfterViewInit(): void {}

  showOverlayPanel() {
    this.op?.toggle(true);
  }
}
