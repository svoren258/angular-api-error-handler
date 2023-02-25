import { ModuleWithProviders, NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { ApiErrorHandlerService } from './api-error-handler.service';
import { ErrorHandlerConfig } from './api-error-handler.types';
import { CONFIG_TOKEN } from './config.token';

@NgModule({
  imports: [ToastrModule.forRoot()],
  providers: [ApiErrorHandlerService],
})
export class ApiErrorHandlerModule {
  static forRoot(
    config: ErrorHandlerConfig
  ): ModuleWithProviders<ApiErrorHandlerModule> {
    return {
      ngModule: ApiErrorHandlerModule,
      providers: [{ provide: CONFIG_TOKEN, useValue: config }],
    };
  }
}
