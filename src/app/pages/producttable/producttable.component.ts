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
    this.updatepage();

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

  pageSize = 10;
  currentpage = 1;
  paginatedData = [];

  totalpage() {

    return Math.ceil(this.cusdata.foodproducts.length / this.pageSize);
  }

  updatepage() {
    const start = (this.currentpage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.filterData= this.cusdata.foodproducts.slice(start, end);
  }

  next() {
    if (this.currentpage < this.totalpage()) {
      this.currentpage++
      this.updatepage()
    }
  }

  prev() {
    if (this.currentpage > 1) {
      this.currentpage--
      this.updatepage()
    }

  }
}
