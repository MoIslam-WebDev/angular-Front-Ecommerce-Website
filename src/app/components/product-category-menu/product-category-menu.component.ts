import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit{
  productCategories:ProductCategory[]=[];
  constructor(private productservice:ProductService) {
  }
  ngOnInit(): void {
    this.listProductCategory();
  }
  listProductCategory() {
    this.productservice.getProductCategory().subscribe(
      data =>{
       
        this.productCategories = data;
        console.log("product Categories",this.productCategories.length );
      }
    )
  }
}
