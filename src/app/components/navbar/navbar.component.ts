import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() openNav = new EventEmitter<boolean>();
  imageSrc: any = '';
  width = 0;
  constructor(private _user: UserService) {
    this._user.getProfile().subscribe((pic) => (this.imageSrc = pic));
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }

  ngOnInit(): void {}

  clickOpenNav() {
    this.openNav.emit(true);
  }
}
