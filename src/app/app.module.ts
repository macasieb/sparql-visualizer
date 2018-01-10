import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material design
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatInputModule,
         MatSelectModule,
         MatTabsModule,
         MatCardModule,
         MatExpansionModule,
         MatIconModule } from '@angular/material';

// Pipes
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

// FxFlex
import { FlexLayoutModule } from '@angular/flex-layout';

// App
import { AppComponent } from './app.component';
import { SparqlForceComponent } from './sparql-force/sparql-force.component';


@NgModule({
  declarations: [
    AppComponent,
    SparqlForceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MarkdownToHtmlModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
