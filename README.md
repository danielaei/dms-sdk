# MailSentry - Powerful Email Verification Library

[![npm version](https://badge.fury.io/js/dms-sdk.svg)](https://badge.fury.io/js/dms-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**MailSentry** is a powerful and easy-to-use email verification library that helps developers ensure their email lists are clean and valid, improving deliverability and engagement in email campaigns.

## Features

- 🚀 **Real-Time Email Verification**
- 📧 **Bulk Email Verification** for marketing campaigns.
- 🌐 **Domain and SMTP Checks** to ensure reliability.
- 🔒 **SPF/DKIM Validation** for improved deliverability.
- 📡 **API Integration** for seamless automation.

## Installation

Install MailSentry via npm:

```sh
npm install dms-sdk
```

## Usage

### Initialization

To use MailSentry, you need to initialize the `MailSentry` class with your API token and then use the `Email` class to interact with the email verification API.

```typescript
import Mailsentry from 'dms-sdk';

const mailsentry = new MailSentry('your-api-token-here');
```

### Single Email Verification

```typescript
const email = 'example@domain.com';
const layers = 4 | 8 | 11;

mailsentry.email
  .instant({ email, layers })
  .then((result) => {
    console.log('Verification result:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### Bulk Email Verification

```typescript
const emails = ['user1@example.com', 'user2@example.com'];
const layers = 4 | 8 | 11;

mailsentry.email
  .bulk({ emails, layers })
  .then((result) => {
    console.log('Bulk verification report ID:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### Get Verification Results

To get the results of a bulk verification:

```typescript
const reportId = 'your-report-id';

mailsentry.email
  .result({ id: reportId, limit: 10, page: 1 })
  .then((result) => {
    console.log('Bulk verification results:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## CDN Usage

You can also use MailSentry via popular CDNs like **jsDelivr** and **UNPKG** for easy integration without installing via npm:

### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/dms-sdk/dist/index.js"></script>
```

### UNPKG

```html
<script src="https://unpkg.com/dms-sdk/dist/index.js"></script>
```

This makes it easy to include MailSentry in your web applications by simply referencing the library using a `<script>` tag.

## License

Licensed under the [MIT License](LICENSE).

## Contributing

Want to contribute? Please check out our [contributing guidelines](CONTRIBUTING.md).

## Contact

For support, please [create an issue](https://github.com/danielaei/dms-sdk/issues).
