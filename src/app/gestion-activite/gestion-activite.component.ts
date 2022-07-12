import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, View, EventSettingsModel, EventRenderedArgs, NavigatingEventArgs, ActionEventArgs, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { registerLicense, extend } from '@syncfusion/ej2-base';

import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { scheduleData, zooEventsData } from 'src/data';


registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNiX39adHdUT2haWEA=');

@Component({
  selector: 'app-gestion-activite',
  templateUrl: './gestion-activite.component.html',
  styleUrls: ['./gestion-activite.component.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  template: `<ejs-schedule> </ejs-schedule>`,
  encapsulation: ViewEncapsulation.None
})
export class GestionActiviteComponent implements OnInit {

  public setView: View = 'Month';
  constructor() { }

  ngOnInit(): void {
  }



}
