import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-prontuario',
  templateUrl: './cadastro-prontuario.component.html',
  styleUrls: ['./cadastro-prontuario.component.css']
})

export class CadastroProntuarioComponent implements OnInit {
  prontuarioForm = this.fb.group({
    
  })
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
