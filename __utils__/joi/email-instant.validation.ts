import Joi from 'joi';

const instantValidationSchema = Joi.object({
  data: Joi.array()
    .items(
      Joi.object({
        deleted: Joi.boolean().required(),
        email: Joi.string().email().required(),
        reason: Joi.string().required(),
        reportId: Joi.string()
          .regex(/^[a-zA-Z0-9]+$/)
          .min(16)
          .required(),
        user: Joi.string().required(),
        valid: Joi.boolean().required(),
        validators: Joi.object({
          disposable: Joi.object({ valid: Joi.boolean().required() }),
          duplicate: Joi.object({ valid: Joi.boolean().required() }),
          mx: Joi.object({ valid: Joi.boolean().required() }),
          regex: Joi.object({ valid: Joi.boolean().required() }),
        }).required(),
      })
    )
    .required(),
});

export { instantValidationSchema };
