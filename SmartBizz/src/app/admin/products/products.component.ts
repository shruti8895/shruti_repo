import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  newProduct = { id: 0, name: '', price: 0, stock: 0 };
  isAdmin = false;
  errorMsg = '';

  constructor(private productService: ProductService, private authService: AuthService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.isAdmin = this.authService.getRole() === 'Admin';
  }

  addProduct() {
    const nameValid = /^[a-zA-Z\s]{3,}$/.test(this.newProduct.name);
    const priceValid = typeof this.newProduct.price === 'number' && this.newProduct.price > 0;
    const stockValid = typeof this.newProduct.stock === 'number' && this.newProduct.stock >= 0;

    if (!nameValid) {
      this.errorMsg = 'Product name must be a string with at least 3 letters.';
      return;
    }
    if (!priceValid || !stockValid) {
      this.errorMsg = 'Price must be a positive number and stock must be a non-negative number.';
      return;
    }

    if (this.isAdmin) {
      this.newProduct.id = this.products.length + 1;
      this.productService.addProduct(this.newProduct);
      this.products = this.productService.getProducts();
      this.newProduct = { id: 0, name: '', price: 0, stock: 0 };
      this.errorMsg = '';
    }
  }

  deleteProduct(id: number) {
    if (this.isAdmin) {
      this.productService.deleteProduct(id);
      this.products = this.productService.getProducts();
    }
  }
  editProduct(product: any) {
  this.newProduct = { ...product };     // Fill form with product details
  this.deleteProduct(product.id);       // Remove so update replaces
}

}