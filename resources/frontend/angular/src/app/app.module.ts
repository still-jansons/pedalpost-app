import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTS
import { OverviewComponent } from './components/overview/overview.component';
import { CitiesComponent } from './components/cities/cities.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SnackbarMessageComponent } from './components/snackbar/snackbar-message.component';

// DIALOGS
import { CityFormDialogComponent } from './components/cities/city-form/dialog-city-form.component';
import { DeleteCityDialogComponent } from './components/cities/delete-city/dialog-delete-city.component';

// FONT AWESOME
import {FontAwesomeIconsModule} from './modules/font-awesome-icons.module';

// MATERIAL MODULE
import { MaterialModule } from './modules/material.module';

// PIPES
import { FilterByKeyPipe } from './pipes/filter.pipe';

// SERVICES
import { HttpService } from './services/http.service';
import { SnackbarService } from './services/snackbar.service';
import { ClientFormDialogComponent } from './components/clients/client-form/client-form-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        OverviewComponent,
        FilterByKeyPipe,
        CitiesComponent,
        CityFormDialogComponent,
        DeleteCityDialogComponent,
        SnackbarMessageComponent,
        ClientsComponent,
        ClientFormDialogComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        FontAwesomeIconsModule,
        HttpClientModule
    ],
    providers: [
        HttpService,
        SnackbarService
    ],
    entryComponents: [
        SnackbarMessageComponent,
        CityFormDialogComponent,
        DeleteCityDialogComponent,
        ClientFormDialogComponent
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
