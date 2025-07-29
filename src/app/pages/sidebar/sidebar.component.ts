import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  @Input() selectedCategory: string = '';
  @Output() categorySelected = new EventEmitter();

  menulist = ["All", "Fruits", "Vegetables"];

  constructor() {}

  ngOnInit() {}

  filterby(category:string) {
    this.categorySelected.emit(category)
    
  }
}
