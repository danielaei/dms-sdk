import MailSentry from '../src';
import {
  bulkValidationSchema,
  emailResultValidationSchema,
  instantValidationSchema,
} from '../__utils__/joi';
import { EmailResultMockResponse } from '../__utils__/mock';
import { EmailInstantMockResponse } from '../__utils__/mock/email-instant.mock';

describe('API interactions', () => {
  let mailsentry: MailSentry;
  beforeEach(() => {
    const xapiToken = process.env.X_API_TOKEN;
    if (!xapiToken) {
      throw new Error('X_API_TOKEN is undefined');
    }
    mailsentry = new MailSentry(xapiToken);
  });
  it('should handle Email Instant', async () => {
    const response = await mailsentry.email.instant({
      email: 'daniel@gmail.com',
      layers: 4,
    });
    const { error } = instantValidationSchema.validate(response);
    expect(error).toBeUndefined();
    EmailInstantMockResponse.data[0].reportId = response.data[0].reportId;
    EmailInstantMockResponse.data[0].user = response.data[0].user;
    expect(response).toEqual(EmailInstantMockResponse);
  });
  it('should handle Email Bulk', async () => {
    const response = await mailsentry.email.bulk({
      emails: 'daniel@gmail.com,saeid@gmail.com',
      layers: 4,
    });
    const { error } = bulkValidationSchema.validate(response);
    expect(error).toBeUndefined();
  });
  it('should handle Email Result', async () => {
    const response = await mailsentry.email.result({ id: 'Y2HVYzPl7bb54bff' });
    const { error } = emailResultValidationSchema.validate(response);
    expect(error).toBeUndefined();
    expect(response).toEqual(EmailResultMockResponse);
  });
});
