import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  isLoading = false;
  imageSrc: any = '/assets/images/melr.jpg';
  constructor() {}

  ngOnInit(): void {}

  async handleFileInput(files: any) {
    this.isLoading = true;

    setTimeout(() => {
      if (files.target.files && files.target.files[0]) {
        const file = files.target.files[0];

        const reader = new FileReader();
        reader.onload = (e) => (this.imageSrc = reader.result);

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
