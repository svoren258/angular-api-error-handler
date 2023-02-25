import { InjectionToken } from '@angular/core';
import { ErrorHandlerConfig } from './api-error-handler.types';

export const CONFIG_TOKEN = new InjectionToken<ErrorHandlerConfig>('config');
