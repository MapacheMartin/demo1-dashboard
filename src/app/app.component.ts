import { ChangeDetectorRef, HostListener, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened: boolean = true;
  isOpened: boolean = true;
  width = 0;
  title = 'demo1';
  mode: any = 'side';
  /**
   *
   */
  constructor(private detectChange: ChangeDetectorRef) {
    this.width = window.innerWidth;
    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
    if (window.innerWidth <= 1478) {
      this.mode = 'over';
      this.opened = true;
      this.isOpened = false;
    } else {
      this.mode = 'side';
      this.isOpened = true;
    }
  }
  openClick() {
    if (window.innerWidth >= 1478) {
      this.opened = !this.opened;
      this.detectChange.detectChanges();
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    }
  }

  openFromNav(e) {
    this.isOpened = true;
  }
}
