import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UploadService } from './services/upload.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { ProgramaComponent } from './programa/programa.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { PruebaRadioComponent } from './prueba-radio/prueba-radio.component';
import { PruebaFileComponent } from './prueba-file/prueba-file.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UploadComponent } from './components/upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    ProgramaComponent,
    DocumentosComponent,
    PruebaRadioComponent,
    PruebaFileComponent,
    FileUploadComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    MatStepperModule,
    NgxFileDropModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
