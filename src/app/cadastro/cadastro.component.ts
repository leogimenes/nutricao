import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [0],
    mail: [''],
    phone: [0],
    bloodType: [''],
    address: this.fb.group({
      street: [''],
      num: [0],
      city: [''],
      state: [''],
      zip: [0]
    }),
  })

  
  tipos: string[] = ['A+','A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const paciente = this.cadastroForm.value;
    console.log(paciente);
    
  }

}
