import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import ImageViewer from './ImageViewer/imageViewer.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UserComponent } from './user/user.component';
import { DirectivespracComponent } from './directivesprac/directivesprac.component';
import { AppviewComponent } from './appview/appview.component';
import {RootviewComponent} from './rootview/rootview.component';
import { HeaderviewComponent } from './headerview/headerview.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewer,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent,
    DirectivespracComponent,
    AppviewComponent,
    RootviewComponent,
    HeaderviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
