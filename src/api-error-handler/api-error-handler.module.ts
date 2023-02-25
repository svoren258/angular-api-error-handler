import { NgModule } from '@angular/core';
import { ApiErrorHandlerService } from './api-error-handler.service';
import { TRANSLATION_TOKEN } from './translation.token';

@NgModule({
  declarations: [ApiErrorHandlerService],
  exports: [ApiErrorHandlerService],
})
export class ApiErrorHandlerModule {}
