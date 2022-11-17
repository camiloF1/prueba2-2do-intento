import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'edad': new FormControl("", Validators.required),
      'username': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'confirmarContraseña': new FormControl("", Validators.required),
      'fechaNacimiento': new FormControl("", Validators.required),
      'genero': new FormGroup('',Validators.required)
    })
   }

  ngOnInit() {
  }
  async guardar(){
    var formulario = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        message: 'Faltan datos por completar',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      nombre: formulario.nombre,
      contraseña: formulario.contraseña
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

}
