import Joi from 'joi';

const validatorSchema = Joi.object({
  regex: Joi.object({
    valid: Joi.boolean().required(),
    reason: Joi.string().allow(null).required(),
  }).required(),
  disposable: Joi.object({
    valid: Joi.boolean().required(),
    reason: Joi.string().allow(null).required(),
  }).required(),
  mx: Joi.object({
    valid: Joi.boolean().required(),
    reason: Joi.string().allow(null).required(),
  }).required(),
  duplicate: Joi.object({
    valid: Joi.boolean().required(),
    reason: Joi.string().allow(null).required(),
  }).required(),
}).required();

const emailValidationSchema = Joi.object({
  _id: Joi.string().guid({ version: 'uuidv4' }).required(),
  email: Joi.string().email().required(),
  user: Joi.string().guid({ version: 'uuidv4' }).required(),
  source: Joi.string().valid('api', 'other_values_if_any').required(),
  reportId: Joi.string().required(),
  deleted: Joi.boolean().required(),
  permanentDelete: Joi.boolean().required(),
  valid: Joi.boolean().required(),
  validators: validatorSchema,
  reason: Joi.string().required(),
  createdAt: Joi.date().iso().required(),
  updatedAt: Joi.date().iso().required(),
}).required();

const summarySchema = Joi.object({
  valid: Joi.number().integer().min(0).required(),
  invalid: Joi.number().integer().min(0).required(),
  unknown: Joi.number().integer().min(0).required(),
  total: Joi.number().integer().min(0).required(),
  duplicate: Joi.number().integer().min(0).required(),
  progress: Joi.number().integer().min(0).max(100).required(),
  layers: Joi.number().integer().min(0).required(),
}).required();

const emailResultValidationSchema = Joi.object({
  data: Joi.array().items(emailValidationSchema).required(),
  summary: summarySchema,
  _pagination: {
    total: Joi.number().integer().min(0).required(),
    totalPage: Joi.number().integer().min(0).required(),
    limit: Joi.number().integer().min(0).required(),
    page: Joi.number().integer().min(0).required(),
  },
}).required();

export { emailResultValidationSchema };
