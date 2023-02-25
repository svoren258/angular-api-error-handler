import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { CONFIG_TOKEN } from 'src/api-error-handler/config.token';
import { MyComponent } from 'src/my.component';
import { ApiErrorHandlerModule } from './api-error-handler/api-error-handler.module';
import { ErrorHandlerConfig } from './api-error-handler/api-error-handler.types';

const CONFIG: ErrorHandlerConfig = {
  entityName: 'Test',
  toastrConfig: {
    timeOut: 10000,
  },
};

NgModule({
  declarations: [MyComponent],
  imports: [
    CommonModule,
    ApiErrorHandlerModule.forRoot(CONFIG),
    ToastrModule.forRoot(),
  ],
});
export class MyModule {}
