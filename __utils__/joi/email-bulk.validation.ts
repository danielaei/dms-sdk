import Joi from 'joi';

const bulkValidationSchema = Joi.object({
  reportId: Joi.string()
    .regex(/^[a-zA-Z0-9]+$/)
    .min(16)
    .required(),
});

export { bulkValidationSchema };
