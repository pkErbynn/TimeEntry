import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';


//components
import { AppComponent } from './app.component';
<<<<<<< HEAD
// import { DashboardComponent } from './screens/admin/components/dashboard/dashboard.component';
import { DashboardComponent as Dev } from './screens/developer/components/dashboard/dashboard.component';
// import { CardComponent } from './screens/admin/components/card/card.component';
=======
>>>>>>> a3b533f395b7209706dde3d243d8c80421f7c50b
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './screens/admin/components/projects/projects.component';
import { AreaComponent } from './screens/admin/components/area/area.component';
import { NavigationComponent } from './screens/admin/navigation/navigation.component';
import { VerifyComponent } from './screens/verify/verify.component';
import { NavComponent } from './screens/developer/nav/nav.component';


// Material
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
<<<<<<< HEAD
// import { AddprojectComponent } from './screens/admin/components/addproject/addproject.component';
=======
>>>>>>> a3b533f395b7209706dde3d243d8c80421f7c50b
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DevelopersComponent } from './screens/admin/components/developers/developers.component';
import { AssignedprojectsComponent } from './screens/developer/components/assignedprojects/assignedprojects.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule, MatInputModule, MatNativeDateModule,MAT_DATE_LOCALE } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import { HighchartsChartModule } from 'highcharts-angular';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    // DashboardComponent,
    Dev,
    // CardComponent,
    HoursComponent,
    HourComponent,
    ProjectsComponent,
    // AddprojectComponent,
=======
    ProjectsComponent,
    DevelopersComponent,
>>>>>>> a3b533f395b7209706dde3d243d8c80421f7c50b
    AssignedprojectsComponent,
    NavigationComponent,
    VerifyComponent,
    NavComponent,
    AreaComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatListModule,
    HighchartsChartModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
