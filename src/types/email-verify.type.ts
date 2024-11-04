interface IEmailVerifyResult {
  data: IEmailVerify[];
  summary: ISummary;
}

interface IEmailVerify {
  _id: string;
  email: string;
  user: string;
  source: Source;
  reportId: string;
  deleted: boolean;
  permanentDelete: boolean;
  valid: boolean;
  validators: IValidators;
  reason: string;
  createdAt: Date;
  updatedAt: Date;
}

enum Source {
  Web = 'web',
}

interface IValidators {
  regex: ICatchAll;
  typo: ICatchAll;
  disposable: ICatchAll;
  mx: ICatchAll;
  smtp: ICatchAll;
  duplicate: ICatchAll;
  role: ICatchAll;
  catchAll: ICatchAll;
  full?: ICatchAll;
  disabled?: ICatchAll;
}

interface ICatchAll {
  valid: boolean | null;
  reason: null | string;
}

interface ISummary {
  valid: number;
  invalid: number;
  unknown: number;
  total: number;
  duplicate: number;
  progress: number;
  layers: number;
}
interface IReportId {
  reportId: string;
}

interface IReqInstant {
  email: string;
  layers: 4 | 8 | 11;
}

interface IReqBulk {
  emails: string;
  layers: 4 | 8 | 11;
}

interface IReqResult {
  id: string;
  page?: number;
  limit?: number;
}

export type {
  IEmailVerifyResult,
  IEmailVerify,
  IValidators,
  ICatchAll,
  ISummary,
  IReportId,
  IReqInstant,
  IReqBulk,
  IReqResult,
};
