import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { options } from './helpers/options';
import { dashboard_general } from './helpers/dashboard_general';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private changeDetectorRefs: ChangeDetectorRef) {}
  options: GridsterConfig;
  user: any = {};
  dashboard: Array<GridsterItem>;
  countNotifications: any;
  isEditing = false;
  isLoading = false;
  currentTime: any = moment().format('dddd DD [de] MMMM');
  static itemChange(item, itemComponent) {
    // console.info("itemChanged", item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    // console.info("itemResized", item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      ...options,
      itemChangeCallback: DashboardComponent.itemChange,
      itemResizeCallback: DashboardComponent.itemResize,
    };

    this.dashboard = JSON.parse(JSON.stringify(dashboard_general));
  }

  edit() {
    this.isEditing = true;
    this.options = {
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
    };
  }

  save() {
    localStorage.setItem('dash', JSON.stringify(this.dashboard));
    this.isEditing = false;
    this.options = {
      draggable: {
        enabled: false,
      },
      resizable: {
        enabled: false,
      },
    };
  }

  reset() {
    console.log(dashboard_general);

    localStorage.removeItem('dash');
    this.dashboard = JSON.parse(JSON.stringify(dashboard_general));
    this.isEditing = false;

    this.options = {
      draggable: {
        enabled: false,
      },
      resizable: {
        enabled: false,
      },
    };

    this.changeDetectorRefs.detectChanges();
  }
}
