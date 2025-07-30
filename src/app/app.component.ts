import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  value = 100;
  food_data = [
    {
      orderno: "001",
      menu: "Mighty Buger",
      price: "670",
      cus_data: [
        {
          cusname: "usman",
          cusphoneno: "03256989888",
          address: "nazimabad, karachi pakistan",
        },
      ],
    },
    {
      orderno: "001",
      menu: "Mighty Buger",
      price: "670",
      cus_data: [
        {
          cusname: "usman",
          cusphoneno: "03256989888",
          address: "nazimabad, karachi pakistan",
        },
      ],
    },
    {
      orderno: "001",
      menu: "Mighty Buger",
      price: "670",
      cus_data: [
        {
          cusname: "usman",
          cusphoneno: "03256989888",
          address: "nazimabad, karachi pakistan",
        },
      ],
    },
    {
      orderno: "001",
      menu: "Mighty Buger",
      price: "670",
      cus_data: [
        {
          cusname: "usman",
          cusphoneno: "03256989888",
          address: "nazimabad, karachi pakistan",
        },
      ],
    },
  ];

  title = "practice-Web";
  rec: string;
  ptocsend(x: string) {
    this.rec = x;
  }

  rec2: string;
  getfromc(x: string) {
    this.rec2 = x;
    // alert("child to parent"+this.rec2)
  }

  // random() {
  //   this.num = Math.floor(Math.random() * 10)
  // }

  // child_to_parent = 'x';
  // getdata(x: string) {
  //   this.child_to_parent = x
  //   console.log(this.child_to_parent)
  // }

  isWhite = true;

  switch_theme() {
    this.isWhite = !this.isWhite;
  }

  selectedcategory = "All";

  filterby(category: string) {
    this.selectedcategory = category;
  }
}
