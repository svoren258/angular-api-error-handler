import { Inject, Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { EntityOperation, ErrorHandlerConfig } from './api-error-handler.types';
import { tap, catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { getTranslation } from './get-translation.helper';
import { CONFIG_TOKEN } from './config.token';

@Injectable({ providedIn: 'root' })
export class ApiErrorHandlerService {
  private readonly translation =
    this.config.customTranslation || getTranslation(this.config.entityName);

  constructor(
    @Inject(CONFIG_TOKEN)
    private readonly config: ErrorHandlerConfig,
    // TODO: make 3rd party service configurable
    private readonly toastr: ToastrService
  ) {
    console.log(this.config);
  }

  // TODO: implement success and error handling using a single RxJS OperatorFn
  handleRequest(obs$: Observable<any>, operation: EntityOperation): void {
    obs$.pipe(
      // Possible usage suggestion:
      // handleSuccess(),
      tap(() => this.handleSuccess(operation)),
      // handleError()
      catchError((e: unknown) => {
        this.handleError(operation);
        return EMPTY;
      })
    );
  }

  // TODO: make this a pipeable RxJs OperatorFn
  handleSuccess(operation: EntityOperation): void {
    const { title, message } = this.translation[operation].success;
    this.toastr.success(message, title, this.config.toastrConfig);
  }

  // TODO: make this a pipeable RxJs OperatorFn
  handleError(operation: EntityOperation): void {
    const { title, message } = this.translation[operation].failure;
    this.toastr.error(message, title, this.config.toastrConfig);
  }
}
