import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CusdataService } from 'src/app/cusdata.service';

@Component({
  selector: 'app-addcusinfo',
  templateUrl: './addcusinfo.component.html',
  styleUrls: ['./addcusinfo.component.css']
})
export class AddcusinfoComponent implements OnInit {

  @Input() child = 0;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public dataObj: any,
    public dialogRef: MatDialogRef<AddcusinfoComponent>, public cusdataService: CusdataService,

  ) { }

  ngOnInit() {
    if (this.dataObj.data != null) {
      this.form.patchValue(this.dataObj.data)

    }

  }
  form = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    country: ['', Validators.required],
    phoneno: ['', Validators.required],
    DOB: ['', Validators.required],
  });

  onNoClick() {
    this.dialogRef.close();
  }

  submit() {
    if (!this.dataObj.isEdit) {
      this.cusdataService.cusinfo.push({
        name: this.form.controls.name.value,
        address: this.form.controls.address.value,
        country: this.form.controls.country.value,
        phoneno: this.form.controls.phoneno.value,
        DOB: this.form.controls.DOB.value

      });
      this.dialogRef.close();
    }
    else {
      this.cusdataService.cusinfo[this.dataObj.index] =
      {
        name: this.form.controls.name.value,
        address: this.form.controls.address.value,
        country: this.form.controls.country.value,
        phoneno: this.form.controls.phoneno.value,
        DOB: this.form.controls.DOB.value

      };
      // alert(this.dataObj.index)
      this.dialogRef.close();


    }

    // this.form.reset();
  }
}
