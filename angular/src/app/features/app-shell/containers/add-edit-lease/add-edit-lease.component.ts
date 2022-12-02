import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-add-edit-lease',
  templateUrl: './add-edit-lease.component.html'
})
export class AddEditLease extends SimpleModalComponent<{type: string; data: any},boolean> implements OnInit {

  type!: string;
  data!: any;

  lease_start_date: any = '2022-01-01';
  lease_end_date: any = '2022-01-01';

  constructor(private readonly featureService: FeatureService) {
    super()
  }

  ngOnInit(): void {
    if(this.type == 'edit'){
      this.lease_start_date = this.data.lease_start_date;
      this.lease_end_date = this.data.lease_end_date;
    }
  }
}
