import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit {
 selectGenero: string ="";
 generos: any = [
   'Masculino',
   'Femenino'
 ];
 RadioChange (event : any){
   this.selectGenero = event.target.value;
 }

  constructor(private formBuilder: FormBuilder) { }
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

