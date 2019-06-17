
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [MatSelectModule,MatAutocompleteModule,MatButtonModule,MatToolbarModule,MatNativeDateModule,MatDatepickerModule,MatIconModule,MatCheckboxModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
  exports: [MatSelectModule,MatButtonModule,MatToolbarModule,MatNativeDateModule,FormsModule,MatAutocompleteModule,
    MatDatepickerModule,MatIconModule,MatCheckboxModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
   
  })
   
export  class  MyMaterialModule { }
