import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { CusdataService } from "src/app/cusdata.service";
import { AddcusinfoComponent } from "src/app/popup/addcusinfo/addcusinfo.component";
import { AddcusqualiComponent } from "src/app/popup/addcusquali/addcusquali.component";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"],
})
export class CustomerComponent implements OnInit {
  @Input() item;
  @Output() dataevent = new EventEmitter<string>();
  // @Output() items = new EventEmitter<string>();

  dialogRef: any;
  msg: string;
  registerForm: FormGroup;
  userdata = [];
  alert: any;
  constructor(
    public dialog: MatDialog,
    public cusdataService: CusdataService,
    public fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      email: ["",[ Validators.required]],
      password: ["", [Validators.required,Validators.minLength(0),Validators.maxLength(4)]],
    });

    this.msg = this.cusdataService.getmessage();
    console.log(this.msg);
    console.log("child  constructor called");
  }

  save() {
    if (this.registerForm.invalid) {
      alert("Enter Cred");
    }
   
    else {
      this.userdata.push(this.registerForm.value);
      this.registerForm.reset();
    }
  }

  ngOnInit() {
    this.cusdataService.Getdata();
    this.cusdataService.Getdata2();
    this.cusdataService.GetCatdata();
    // this.cusdataService.PostData();
  }

  ngOnChanges(changes: any) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChanges called");
  }
  Opendailogfor_addcusnifo(data: any, isEdit: boolean, index: any) {
    const dialogRef = this.dialog.open(AddcusinfoComponent, {
      width: "400px",
      disableClose: true,
      data: {
        data: data,
        isEdit: isEdit,
        index: index,
      },
    });
    console.log(data);
  }

  Opendailogfor_addcus_quali(data: any, isEdit: boolean) {
    const dialogRef = this.dialog.open(AddcusqualiComponent, {
      width: "1000px",
      disableClose: true,
      data: {
        data: data,
        isEdit: isEdit,
        // index: index,
      },
    });
    // alert(data)
  }
  delete(i) {
    this.cusdataService.cusinfo.splice(i, 1);
  }

  onClose() {
    this.dialogRef.close();
  }

  search1(value) {
    this.cusdataService.Copy_cusinfo = this.cusdataService.cusinfo.filter(
      (x) =>
        x.name.toLowerCase().indexOf(value) >= 0 ||
        x.country.toLowerCase().indexOf(value) >= 0
    );
  }

  search(value) {
    this.cusdataService.Copy_storedata2 = this.cusdataService.storedata2.filter(
      (x) => x.title.toLowerCase().indexOf(value) >= 0
    );
  }

  searchCat(value) {
    this.cusdataService.Copy_catdata = this.cusdataService.catdata.filter(
      (x) => x.id.toLowerCase().indexOf(value) >= 0
    );
  }
}
