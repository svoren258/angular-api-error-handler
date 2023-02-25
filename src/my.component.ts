import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { ApiErrorHandlerService } from './api-error-handler/api-error-handler.service';
import { EntityOperation } from './api-error-handler/api-error-handler.types';
import { CONFIG_TOKEN } from './api-error-handler/config.token';
import { ApiErrorHandlerModule } from './api-error-handler/api-error-handler.module';

@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './my.component.html',
  providers: [
    ApiErrorHandlerService,
    {
      provide: CONFIG_TOKEN,
      useValue: {
        entityName: 'Test',
        toastrConfig: {
          timeOut: 10000,
        },
      },
    },
  ],
})
export class MyComponent {
  name = 'Angular';

  constructor(private readonly errorHandler: ApiErrorHandlerService) {}

  onSuccess(): void {
    this.errorHandler.handleSuccess(EntityOperation.CREATE);
  }

  onError(): void {
    this.errorHandler.handleError(EntityOperation.CREATE);
  }
}
