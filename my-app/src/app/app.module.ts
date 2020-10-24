import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InviteformpageComponent } from './inviteformpage/inviteformpage.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule } from '@angular/forms';
import { DateTimePickerModule} from '@syncfusion/ej2-angular-calendars';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
enableRipple(true);

@NgModule({
  declarations: [
    AppComponent,
    InviteformpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RichTextEditorAllModule,
    DateTimePickerModule,
    FormsModule,
    SwitchModule,
    TextBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent, InviteformpageComponent]
})
export class AppModule { }
