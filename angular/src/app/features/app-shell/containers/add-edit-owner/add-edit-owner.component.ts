import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-add-edit-owner',
  templateUrl: './add-edit-owner.component.html'
})
export class AddEditOwner extends SimpleModalComponent<{type: string; data: any},boolean> implements OnInit {

  type!: string;
  data!: any;

  number: any = '';
  email: any = '';

  constructor(private readonly featureService: FeatureService) {
    super()
  }

  ngOnInit(): void {
    if(this.type == 'edit'){
      this.number = this.data.contact_number;
      this.email = this.data.contact_email;
    }
  }

  onChangeEmail(event: any){
    this.email = event.target.value;
  }

  onChangeNumber(event: any){
    this.number = event.target.value;
  }

  submit(){
    let formData = new FormData();
    formData.append('contact_email',this.email);
    formData.append('contact_number',this.number);
    formData.append('password',this.data.password);
    if(this.type == 'add'){
      this.featureService.postFeature('owners',formData).subscribe((data: any) => {
        if(data){
          this.close();
        }
      })
    } else if (this.type == 'edit'){
      this.featureService.putFeature('owners',this.data.id,formData)
      .subscribe((data: any) => {
        if(data){
          this.result = data
          this.close();
        }
      })
    }
  }
}
