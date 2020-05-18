import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
interface Campus{
  value: string;
  viewValue: string;
}
interface Programa {
  value: string;
  viewValue: string;
}
interface Periodo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.scss']
})
export class ProgramaComponent implements OnInit {
  selectGenero: string='';
  generos: any = [
    'Masculino',
    'Femenino'
  ];
  RadioChange (event : any){
    this.selectGenero = event.target.value;
  }
 
  campuses: Campus[] = [
    {value: 'monterrey-0', viewValue: 'Monterrey'},
    {value: 'san nicolas-1', viewValue: 'San Nicolas'},
    {value: 'escobedo-2', viewValue: 'Escobedo'},
    {value: 'apodaca-3', viewValue: 'Apodaca' }
  ];
  programas: Programa[] = [
    {value: 'enfermeria-0', viewValue: 'Enfermeria'},
    {value: 'empresas-1', viewValue: 'Administración de empresas'},  
    {value: 'sistemas-2', viewValue: 'Ingenieria en sistemas'},
    {value: 'mecatronica-3', viewValue: 'Ingeniera en mecatronica'},  
  ];
  periodos: Periodo[] = [
    {value: 'enero-junio-0', viewValue: 'Enero - Junio'},
    {value: 'julio-diciembre-1', viewValue: 'Julio - Diciembre'},
  ];
  constructor(private formBuilder: FormBuilder) {}
    get username(){
      return this.registerForm.get('username');
    }
    get apellidop(){
      return this.registerForm.get('apellidop');
    }
    get apellidom(){
      return this.registerForm.get('apellidom');
    }
    
    get correo(){
      return this.registerForm.get('correo');
    }
    get edad(){
      return this.registerForm.get('edad');
    }
    get fechan(){
      return this.registerForm.get('fechan');
    }
    get direccion(){
      return this.registerForm.get('direccion');
    }
  get nacionalidad(){
    return this.registerForm.get('nacionalidad');
  }
    registerForm= this.formBuilder.group({
      username: ['', Validators.required],
      apellidop: ['', Validators.required],
      apellidom: ['', Validators.required],
      genero: [''],
      correo: ['', Validators.required],
      edad: ['', [Validators.required, Validators.minLength(2)]],
      fechan: ['', Validators.required],
      direccion: ['', Validators.required],
      nacionalidad: ['', Validators.required]
    });

  ngOnInit(): void {
  }
  submit(){
    if(!this.registerForm.valid){
      alert('Alguna regla de validación no se está respetando');
      return;
  }
  console.log(this.registerForm.value);
}

cancelar(){
  this.registerForm.patchValue({
    username: '',
    apellidop: '',
    apellidom: '',
    genero: '',
    correo: '',
    edad: '', 
    fechan: '',
    direccion: '',
    nacionalidad: '',
  });
}
}
