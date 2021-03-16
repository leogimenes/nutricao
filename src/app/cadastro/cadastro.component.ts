import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [0],
    mail: [''],
    phone: [0],
    address: this.fb.group({
      street: [''],
      hNumber: [0],
      city: [''],
      state: [''],
      zip: [0]
    }),
    bloodType: ['']
  })

  
  tipos: string[] = ['A+','A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit(){

  }

}
