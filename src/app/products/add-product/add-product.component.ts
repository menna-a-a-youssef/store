import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  addProductForm = this.fb.group({
    title: [null, Validators.required],
    price: [null, Validators.required],
    description: [null, Validators.required],
    image: [null, Validators.required],
    category: [null, Validators.required]
  });


  constructor(private fb: FormBuilder) {}

  onSubmit(): void {

    let newProduct = {
      title: this.addProductForm.controls['title'].value,
      price:this.addProductForm.controls['price'].value,
      description:this.addProductForm.controls['description'].value,
      image:this.addProductForm.controls['image'].value,
      category:this.addProductForm.controls['category'].value
    }
    console.log(newProduct);
    fetch('https://fakestoreapi.com/products',{
      method:"POST",
      body:JSON.stringify(newProduct)
    })
      .then(res=>res.json())
      .then(json=>{if(json.id){alert("Product added successfully")}})
  }
}
