import {Component, OnInit} from '@angular/core';
import { IMyOptions } from 'ng-uikit-pro-standard';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public myDatePickerOptions: IMyOptions = {
    dayLabels: {su: 'Dim', mo: 'Lun', tu: 'Mar', we: 'Mer', th: 'Jeu', fr: 'Ven', sa: 'Sam'},
    dayLabelsFull: {su: "Dimanche", mo: "Lundi", tu: "Mardi", we: "Mercredi", th: "Jeudi", fr: "Vendredi", sa: "Samedi"},
    monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Avr', 5: 'Mai', 6: 'Juin', 7: 'Jui', 8: 'Aoû', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' },
    monthLabelsFull: { 1: "Janvier", 2: "Février", 3: "Mars", 4: "Avril", 5: "Mai", 6: "Juin", 7: "Juillet", 8: "Août", 9: "Semptembre", 10: "Octobre", 11: "Novembre", 12: "Décembre" }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
