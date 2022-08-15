# Learning app in angular

```
error: error NG8002: Can't bind to 'ngModel' since it isn't a known property of 'input'.
solution: import FormsModule in app.module.ts
import { FormsModule } from '@angular/forms'  
```
Declare Both components in app.module.ts
```javascript

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```