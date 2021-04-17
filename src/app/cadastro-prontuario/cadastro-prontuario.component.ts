import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-prontuario',
  templateUrl: './cadastro-prontuario.component.html',
  styleUrls: ['./cadastro-prontuario.component.css']
})

export class CadastroProntuarioComponent implements OnInit {
  prontuarioForm: FormGroup = this.fb.group({
    anamnese: this.fb.group({
      painelDePerguntas: [''],
      sinaisESintomas: [''],
      radioAlimentar: [''],
      antropometria: this.fb.group({
        peso: [0.0],
        altura: [0.0],
        dobras: [0.0],
        circunferencias: [0, 0]
      })
    }),
    diagnostico: this.fb.group({
      conduta: [''],
      orientacoesNutricionais: ['']
    }),
    planoAlimentar: this.fb.group({
      calculoDieta: [0.0],
      selecionaModelos: ['']
    }),
    anexos: this.fb.array([])
  });

  get anexos() {
    return this.prontuarioForm.get('anexos') as FormArray;
  }

  addAnexo() {
    const anexo = this.fb.group({
      title: [''],
      date: ['']
    })
    this.anexos.push(anexo);
  }

  saveAnexo() {
    console.log("Anexo salvo");

  }

  modelos: string[] = ['Modelo 1', 'Modelo 2', 'Modelo 3', 'Modelo 4'];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let prontuario = this.prontuarioForm.value;
    console.log(prontuario.anexo);
  }

}
