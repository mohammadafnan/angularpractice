import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { CusdataService } from "src/app/cusdata.service";

@Component({
  selector: "app-producttable",
  templateUrl: "./producttable.component.html",
  styleUrls: ["./producttable.component.css"],
})
export class ProducttableComponent implements OnInit {
  @Input() category: string = "All";

  constructor(public cusdata: CusdataService) {}
  filterData = [];
  ngOnInit() {
    this.cusdata.foodproducts;
  }

  ngOnChanges(): void {
    this.filterby();
  }

  filterby() {
    const data = this.cusdata.foodproducts;
    if (this.category === "All") {
      this.filterData = data;
    } else {
      this.filterData = data.filter((x) => x.category == this.category);
      // alert("in pro")
    }
  }

  search(value: string) {
    const text = value.toLowerCase();
    this.filterData = this.cusdata.foodproducts.filter(
      (x: any) =>
        x.name.toLowerCase().includes(text) ||
        x.category.toLowerCase().includes(text)
    );
  }
}
