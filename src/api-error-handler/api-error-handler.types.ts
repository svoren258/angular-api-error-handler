import { IndividualConfig } from 'ngx-toastr';

export enum EntityOperation {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
}

export enum EntityOperationResult {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

// TODO: make CustomTranslation Map/Record of custom (and Firebase) API error codes to custom error messages
export type CustomTranslation = {
  [key in EntityOperation]: {
    [key in EntityOperationResult]: {
      title: string;
      message: string;
    };
  };
};

export type ErrorHandlerConfig = {
  entityName: string;
  customTranslation?: CustomTranslation;
  toastrConfig?: Partial<IndividualConfig>;
};
