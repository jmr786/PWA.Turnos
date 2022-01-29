import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  diasDeLaSemana:string =""
  nombreMes:string=""
  meses:string[] = [
    "gennaio",
    "gebbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ];
  dias:string[] = ["dom", "lun", "mar", "mer", "gio", "ven", "sab"];
  arrDias:string[] = [];
  constructor() {
   
    const hoy= new Date(2022,1,1);
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0);
    hoy.setMonth(hoy.getMonth());
    hoy.setDate(1);
    this.nombreMes= this.meses[hoy.getMonth()] + " " + hoy.getFullYear()
  
   
    
    var diasVacios =  hoy.getDay()
       
      
    
    for (let i=0; i < diasVacios; i++){
      this.arrDias.push("")
     
    }
  
  
   
    for (let i = 1; i <= ultimoDia.getDate(); i++) {
     this.arrDias.push(i.toString())
     
   }

  
   }

  

  ngOnInit(): void {
  }

}




