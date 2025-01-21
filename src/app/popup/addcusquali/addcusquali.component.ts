import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { CusdataService } from "src/app/cusdata.service";

@Component({
  selector: "app-addcusquali",
  templateUrl: "./addcusquali.component.html",
  styleUrls: ["./addcusquali.component.css"],
})
export class AddcusqualiComponent implements OnInit {
  parentvar = 100;

  isedit: boolean = false;
  localdatstore: any;
  // getcusqualidata: any;

  activeEditObjectIndex: number = 0;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataObj: any,
    public dialogRef: MatDialogRef<AddcusqualiComponent>,
    public cusdataService: CusdataService
  ) {}

  ngOnInit() {
    this.cusdataService.copy_cusquali = this.cusdataService.cusquali

    if (localStorage.getItem("cusqualificationdata") != null) {
      this.cusdataService.cusquali = JSON.parse(
        localStorage.getItem("cusqualificationdata")
      );
      this.cusdataService.copy_cusquali = this.cusdataService.cusquali
      
      console.log("Get_cus_quali Data", this.cusdataService.cusquali);
    }
  }
  form = this.fb.group({
    degree: ["", Validators.required],
    university: ["", Validators.required],
    startdate: ["", Validators.required],
    enddate: ["", Validators.required],
    gpa: ["", Validators.required],
  });

  onNoClick() {
    this.dialogRef.close();
  }

  delete(i) {
    this.cusdataService.cusquali.splice(i, 1);
    // alert("work")
  }

  submit() {
    if (!this.dataObj.isEdit) {
      this.cusdataService.cusquali.push({
        degree: this.form.controls.degree.value,
        university: this.form.controls.university.value,
        startdate: this.form.controls.startdate.value,
        enddate: this.form.controls.enddate.value,
        gpa: this.form.controls.gpa.value,
      });

      this.form.reset();
    } else {
      this.cusdataService.cusquali[this.activeEditObjectIndex] = {
        degree: this.form.controls.degree.value,
        university: this.form.controls.university.value,
        startdate: this.form.controls.startdate.value,
        enddate: this.form.controls.enddate.value,
        gpa: this.form.controls.gpa.value,
      };
      this.form.reset();
    }
    localStorage.setItem(
      "cusqualificationdata",
      JSON.stringify(this.cusdataService.cusquali)
    );
    console.log("cusquali localstorage Data", this.cusdataService.cusquali);
  }
  edit(i, popdata) {
    this.dataObj.isEdit = true;
    this.activeEditObjectIndex = i;
    this.form.patchValue(popdata);
  }

  search(value) {
    this.cusdataService.copy_cusquali = this.cusdataService.cusquali.filter(
      (x) => x.university.toLowerCase().indexOf(value) >= 0 || x.degree.toLowerCase().indexOf(value) >= 0 
    );
  }
  // search(value) {
  //   this.cusdataService.Copy_storedata2 = this.cusdataService.storedata2.filter(
  //     (x) => x.title.toLowerCase().indexOf(value) >= 0
  //   );
  
}
