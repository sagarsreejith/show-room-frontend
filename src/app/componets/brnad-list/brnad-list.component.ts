import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiCallService } from "src/app/services/common/api-call.service";
import { ModalService } from "src/app/common/_modal/modal.service";

@Component({
  selector: "app-brnad-list",
  templateUrl: "./brnad-list.component.html",
  styleUrls: ["./brnad-list.component.scss"]
})
export class BrnadListComponent implements OnInit {
  constructor(
    private ApiCallService: ApiCallService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.getAllBrands();
    //this.bodyText = "This text can be updated in modal 1";
  }
  bodyText: any;
  editField: string;
  brandList: Array<any> = [];

  awaitingPersonList: Array<any> = [
    {
      id: 6,
      name: "George Vega",
      age: 28,
      companyName: "Classical",
      country: "Russia",
      city: "Moscow"
    },
    {
      id: 7,
      name: "Mike Low",
      age: 22,
      companyName: "Lou",
      country: "USA",
      city: "Los Angeles"
    },
    {
      id: 8,
      name: "John Derp",
      age: 36,
      companyName: "Derping",
      country: "USA",
      city: "Chicago"
    },
    {
      id: 9,
      name: "Anastasia John",
      age: 21,
      companyName: "Ajo",
      country: "Brazil",
      city: "Rio"
    },
    {
      id: 10,
      name: "John Maklowicz",
      age: 36,
      companyName: "Mako",
      country: "Poland",
      city: "Bialystok"
    }
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.brandList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.brandList[id]);
    this.brandList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.brandList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  getAllBrands() {
    this.ApiCallService.getApiRequest("api/v0/get-all-brands").subscribe(
      (data: any) => {
        data ? (this.brandList = data.data) : (this.brandList = []);
      },
      err => {}
    );
  }

  getModelSpec(modelId:number){
    console.log(modelId);
    this.ApiCallService.postApiRequest({model_id: modelId},"api/v0/get-model-spec").subscribe(
      (data: any) => {
        data ? (this.bodyText = data.data) : (this.bodyText = []);
        console.log(this.bodyText);
      },
      err => {}
    );
  }

  getModelInfo(model: any) {
    console.log(model);
  }

  openModal(id: string, modalId: number) {
    this.getModelSpec(modalId);
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
