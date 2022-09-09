import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened: boolean = true;
  title = 'demo1';

  /**
   *
   */
  constructor(private detectChange: ChangeDetectorRef) {}

  openClick() {
    this.detectChange.detectChanges();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
  }
}
