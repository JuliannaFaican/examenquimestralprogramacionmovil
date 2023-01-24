import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent implements OnInit {
  nav: any;

  constructor() { }

  nombre:any=''
  apellido:any=''
  direccion:any=''
  celular:any=''
  edad:any=''

  ngOnInit(): void {
   
  }

  

  registro(){
    this.nav.navigate(['web1'])
  }

  almacenar(){
    localStorage.setItem('nombre',this.nombre)
    localStorage.setItem('apellido',this.apellido)
    localStorage.setItem('edad',this.edad)
    localStorage.setItem('direccion',this.direccion)
    localStorage.setItem('celular',this.celular)
  }

  recuperar(){
    localStorage.getItem('nombre')
    localStorage.getItem('apellido')
    localStorage.getItem('direccion')
    localStorage.getItem('edad')
    localStorage.getItem('celular')
  }


}
