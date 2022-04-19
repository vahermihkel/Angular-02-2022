import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product.model';

@Component({
  selector: 'app-parcel-machine',
  templateUrl: './parcel-machine.component.html',
  styleUrls: ['./parcel-machine.component.css']
})
export class ParcelMachineComponent implements OnInit {
  parcelMachines: any[] = [];
  selectedParcelMachine = "";
  @Input() cartProducts: CartProduct[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getParcelMachines();
  }

  getParcelMachines() {
    this.http.get<any[]>("https://www.omniva.ee/locations.json").subscribe(machinesFromAPI => {
      this.parcelMachines = machinesFromAPI.filter(element => element.A0_NAME === "EE");
    })

    const pMachineFromLS = localStorage.getItem("parcelmachine");
    if (pMachineFromLS) {
      this.selectedParcelMachine = pMachineFromLS;
    }
  }

  onDeleteParcelMachine() {
    this.selectedParcelMachine = "";
    localStorage.removeItem("parcelmachine");
    const index = this.cartProducts.findIndex(element => element.cartProduct.id === 11110000);
    this.cartProducts.splice(index,1);
  }

  onSelectedPMachine() {
    localStorage.setItem("parcelmachine", this.selectedParcelMachine);
    this.cartProducts.push(
      {
        cartProduct: {
          id: 11110000, 
          name: "Pakiautomaadi tasu", 
          price: 3.5, 
          imgSrc: "/assets/locker.png", 
          category: "",
          description: "",
          isActive: true
        },
        quantity:1
      }
    );
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

}
