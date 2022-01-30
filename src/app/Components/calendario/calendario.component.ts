import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  diasDeLaSemana: string = '';
  nombreMes: string = '';
  diaDeHoy: number = 0;
  diaSeleccionado!: number;
  meses: string[] = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayp',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  dias: string[] = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  arrDias: string[] = [];
  hoy = new Date();

  aNumero(str: string): number {
    return parseInt(str);
  }

  constructor() {
    const ultimoDia = new Date(
      this.hoy.getFullYear(),
      this.hoy.getMonth() + 1,
      0
    );

    this.diaDeHoy = this.hoy.getDate();
    this.hoy.setMonth(this.hoy.getMonth());

    this.hoy.setDate(1);

    this.nombreMes =
      this.meses[this.hoy.getMonth()] + ' ' + this.hoy.getFullYear();

    var diasVacios = this.hoy.getDay();

    for (let i = 0; i < diasVacios; i++) {
      this.arrDias.push('');
    }

    for (let i = 1; i <= ultimoDia.getDate(); i++) {
      this.arrDias.push(i.toString());
    }
  }

  handleClic(dia: string) {
    this.diaSeleccionado = parseInt(dia);
  }

  handleClickTipo(dia: number) {
    var text: string=""

    switch (dia) {
      case 0:
        text = 'mañana';
        break;
      case 1:
        text = 'mediodia';
        break;
      case 2:
        text = 'tarde';
        break;
      case 3:
        text = 'noche';
        break;
    }

    alert('el dia es ' + this.diaSeleccionado + ' a la ' + text);
  }
  ngOnInit(): void {}
}
