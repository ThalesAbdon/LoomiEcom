// src\services\email-service.ts
import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs';
import { Injectable } from '@nestjs/common';
import { EmailTemplateParams } from 'src/shared/utils/interface/email-template';

@Injectable()
export class EmailService {
  constructor() {
    emailjs.init({
      publicKey: process.env.EMAIL_JS_PUBLIC_KEY,
      privateKey: process.env.EMAIL_JS_PRIVATE_KEY,
    });
  }

  async sendRegisterationEmail(params: EmailTemplateParams) {
    try {
      await emailjs.send(
        process.env.EMAIL_JS_SERVICE_KEY,
        process.env.EMAIL_JS_REGISTRATION_TEMPLATE_ID,
        params,
      );
      return true;
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        return false;
      }
      return false;
    }
  }
}
