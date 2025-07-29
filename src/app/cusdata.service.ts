import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Body } from "@angular/http/src/body";

@Injectable({
  providedIn: "root",
})
export class CusdataService {

 foodproducts = [
    { name: 'Apple', category: 'Fruits' },
    { name: 'Banana', category: 'Fruits' },
    { name: 'Orange', category: 'Fruits' },
    { name: 'Grapes', category: 'Fruits' },
    { name: 'Mango', category: 'Fruits' },
    { name: 'Pineapple', category: 'Fruits' },
    { name: 'Carrot', category: 'Vegetables' },
    { name: 'Spinach', category: 'Vegetables' },
    { name: 'Potato', category: 'Vegetables' },
    { name: 'Tomato', category: 'Vegetables' },
    { name: 'Broccoli', category: 'Vegetables' },
    { name: 'Cucumber', category: 'Vegetables' }
  ];
  














  url = "	https://api.publicapis.org";
  url1 = "https://jsonplaceholder.typicode.com";
  catApi =
    "https://api.thecatapi.com//v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=2&limit=200";

  catdata;
  Copy_catdata;

  storedata;
  storedata2;
  storedata3;
  Copy_storedata2;
  Copy_cusinfo;
  copy_cusquali;

  cusinfo: any = [
    {
      name: "afnan",
      address: "garden karachi",
      country: "pakistan",
      phoneno: "03232209012",
      DOB: "4/20/1995",
    },
    {
      name: "anus",
      address: "garden karachi",
      country: "pakistan",
      phoneno: "03222605596",
      DOB: "4/20/1998",
    },
    {
      name: "khalid",
      address: "garden karachi",
      country: "germany",
      phoneno: "03232209012",
      DOB: "4/20/2000",
    },
    {
      name: "Omer",
      address: "garden karachi",
      country: "usa",
      phoneno: "03222605596",
      DOB: "4/20/1998",
    },
    {
      name: "Khizer",
      address: "garden karachi",
      country: "japan",
      phoneno: "03232209012",
      DOB: "4/20/1998",
    },
    {
      name: "Abdul Rafay",
      address: "garden karachi",
      country: "france",
      phoneno: "03222605596",
      DOB: "4/20/1998",
    },
  ];

  cusquali: any = [
    // {
    //   degree: "bscs(computer science)",
    //   university: "SMIU ",
    //   startdate: "4/20/2014",
    //   enddate: "4/20/2018",
    //   gpa: "3.00",
    // },
    // {
    //   degree: "bscs(software eng)",
    //   university: "karachi ",
    //   startdate: "4/20/2017",
    //   enddate: "4/20/2019",
    //   gpa: "2.70",
    // },
    // {
    //   degree: "mba(h.r)",
    //   university: "mba ",
    //   startdate: "4/20/2019",
    //   enddate: "4/20/2023",
    //   gpa: "3.10",
    // },
  ];
  constructor(private http: HttpClient) {
    this.Copy_cusinfo = this.cusinfo;
    this.copy_cusquali = this.cusquali;
  }
  // ngOnInit() {
  //   this.Getdata();
  // }
  // '/entries'

  GetCatdata() {
    this.http.get(this.catApi).subscribe((cardata) => {
      console.log(cardata + "catdata");
      this.catdata = cardata;
      this.Copy_catdata = cardata;
    });
  }

  Getdata() {
    this.http.get(this.url + "/entries").subscribe((data) => {
      console.log(data + "ent");
      this.storedata = data;
    });
  }
  Getdata2() {
    this.http.get(this.url1 + "/posts").subscribe((newdata) => {
      console.log(newdata);
      this.storedata2 = newdata;
      this.Copy_storedata2 = newdata;
    });
  }

  PostData() {
    let body = {
      title: "test data",
      body: "test data",
      userId: 101,
    };
    this.http.post(this.url1 + "/posts", body).subscribe((postdata) => {
      console.log(postdata + "postdata");
      this.storedata3 = postdata;
    });
  }



  getmessage(){
    return "this message come from service"
  }

  
}
