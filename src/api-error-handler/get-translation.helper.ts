import {
  CustomTranslation,
  EntityOperation,
  EntityOperationResult,
} from './api-error-handler.types';

const TRANSLATION_FALLBACK = {
  [EntityOperation.CREATE]: {
    [EntityOperationResult.SUCCESS]: {
      title: '',
      message: '',
    },
    [EntityOperationResult.FAILURE]: {
      title: '',
      message: '',
    },
  },
  [EntityOperation.READ]: {
    [EntityOperationResult.SUCCESS]: {
      title: '',
      message: '',
    },
    [EntityOperationResult.FAILURE]: {
      title: '',
      message: '',
    },
  },
  [EntityOperation.UPDATE]: {
    [EntityOperationResult.SUCCESS]: {
      title: '',
      message: '',
    },
    [EntityOperationResult.FAILURE]: {
      title: '',
      message: '',
    },
  },
  [EntityOperation.DELETE]: {
    [EntityOperationResult.SUCCESS]: {
      title: '',
      message: '',
    },
    [EntityOperationResult.FAILURE]: {
      title: '',
      message: '',
    },
  },
};

export function getTranslation(entity: string): CustomTranslation {
  const uppercaseEntity = entity.toUpperCase();
  return Object.entries(EntityOperation).reduce(
    (accOp, [opKey, opValue]) => ({
      ...accOp,
      [opKey]: {
        ...Object.entries(EntityOperationResult).reduce(
          (accRes, [resKey, resValue]) => ({
            ...accRes,
            [resKey]: {
              title: `${uppercaseEntity} ${opValue} ${resValue}`,
              message: `${uppercaseEntity} was ${
                resKey === EntityOperationResult.FAILURE && 'not'
              } ${opValue}ed.`,
            },
          }),
          {
            [EntityOperationResult.SUCCESS]: {
              title: 'Success',
              message: 'Operation successful',
            },
            [EntityOperationResult.FAILURE]: {
              title: 'Failure',
              message: 'Operation failed',
            },
          }
        ),
      },
    }),
    TRANSLATION_FALLBACK
  );
}
