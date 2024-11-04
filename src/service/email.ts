import CustomFetch from '../api';
import {
  IEmailVerifyResult,
  IReportId,
  IReqBulk,
  IReqInstant,
  IReqResult,
} from '../types';

export class Email {
  private api: CustomFetch;

  constructor(api: CustomFetch) {
    this.api = api;
  }

  async instant({
    email,
    layers,
  }: IReqInstant): Promise<Omit<IEmailVerifyResult, 'summary'>> {
    try {
      return await this.api.get(`/email/verify/instant?email=${email}&layers=${layers}`);
    } catch (error) {
      throw error;
    }
  }
  async bulk({ emails, layers = 8 }: IReqBulk): Promise<IReportId> {
    try {
      return await this.api.get(`/email/verify/bulk?emails=${emails}&layers=${layers}`);
    } catch (error) {
      throw error;
    }
  }
  async result({ id, limit = 10, page = 1 }: IReqResult): Promise<IEmailVerifyResult> {
    try {
      return await this.api.get(`/email/verify/result/${id}?page=${page}&limit=${limit}`);
    } catch (error) {
      throw error;
    }
  }
}
