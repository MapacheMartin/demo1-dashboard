import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  isLoading = false;
  imageSrc: any = '';
  constructor(private _user: UserService) {}

  ngOnInit(): void {
    this._user.getProfile().subscribe((pic) => (this.imageSrc = pic));
  }

  async handleFileInput(files: any) {
    this.isLoading = true;

    setTimeout(() => {
      if (files.target.files && files.target.files[0]) {
        const file = files.target.files[0];

        const reader = new FileReader();
        reader.onload = (e) => (this._user.setProfile(reader.result));

        reader.readAsDataURL(file);
        setTimeout(() => {
          this.isLoading = false;
        }, 50);
      }
    }, 1000);
  }

  clickInput() {
    document.getElementById('fileInput')?.click();
  }
}
